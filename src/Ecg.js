

import React, { useState, useEffect, useRef } from 'react';
import './Ecg.css';

const Ecg = () => {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const requestRef = useRef();
  const graphSheetHeight = 120; // Height of the graph sheet in pixels
  const numGridLines = 11; // Number of grid lines on the graph sheet

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/ecgData.json');
      const result = await response.json();
      const samples = result.data.flatMap(item => item.ecg.Samples);
      setData(samples);
      setMinValue(Math.min(...samples));
      setMaxValue(Math.max(...samples));
    };

    fetchData();
  }, []);

  const animate = () => {
    setPosition(prevPosition => (prevPosition + 1) % data.length);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (data.length > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [data]);

  const drawWaveform = () => {
    const points = [];
    for (let x = 0; x < 800; x++) {
      const index = (position + x) % data.length;
      const y = data[index];
      points.push(`${x},${graphSheetHeight - ((y - minValue) / (maxValue - minValue) * graphSheetHeight)}`);
    }
    return points.join(' ');
  };

  return (
    <div className="container">
      <div className="ecg-container" style={{ height: `${graphSheetHeight}px` }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`-50 0 850 ${graphSheetHeight}`}>
          <rect width="100%" height="100%" fill="#fff" />
          <g className="grid">
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <line x1={i * 40} y1="0" x2={i * 40} y2={graphSheetHeight} stroke="#eee" />
              </g>
            ))}
            {[...Array(numGridLines)].map((_, i) => (
              <g key={i}>
                <line x1="0" y1={(i / numGridLines) * graphSheetHeight} x2="800" y2={(i / numGridLines) * graphSheetHeight} stroke="#eee" />
              </g>
            ))}
          </g>
          <polyline
            fill="none"
            stroke="#000"
            strokeWidth="2"
            points={drawWaveform()}
          />
        </svg>
      </div>
    </div>
  );
};

export default Ecg;






