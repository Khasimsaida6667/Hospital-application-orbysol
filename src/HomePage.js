import React from 'react';
//import { Link } from 'react-router-dom';
//import { FaSearch, FaSlidersH, FaRegUserCircle } from 'react-icons/fa';
import Header from './Header';
import {  TiArrowSortedDown } from "react-icons/ti";
//import { PiLineVerticalBold } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
//import { FiLogOut } from "react-icons/fi";
import './HomePage.css';

const HomePage = ({ onLogout }) => {

    const patients = [];
    const providers = ['Provider A', 'Provider B', 'Provider C', 'Provider D', 'Provider E'];
    const types = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5'];
    const statuses = ['Active', 'Inactive'];
  
    for (let i = 1; i <= 8; i++) {
      const patientName = `Patient ${i}`;
      const provider = providers[Math.floor(Math.random() * providers.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const deviceId = `DEV${String(i).padStart(3, '0')}`;
      const startDate = `2024-05-${String(i).padStart(2, '0')}`;
      const endDate = `2024-05-${String(i + 9).padStart(2, '0')}`;
      const remainingDays = i + 5;
  
      patients.push({
        name: patientName,
        status,
        type,
        deviceId,
        startDate,
        endDate,
        remainingDays,
        provider,
      });
    }
    
    return (
        <div className="App">
            <div className="total-contain">
                <Header onLogout={onLogout}/>

                <div className="list-items">
                    <div className="c"><img src="https://i.ibb.co/BGS5SG5/Registration-icon.png" alt="Registration-icon" border="0" /> <p>Registrations......</p></div>
                    <div className="c"> <img src="https://i.ibb.co/grYsy2w/New-Registration-icon.png" alt="New-Registration-icon" border="0" /> <p>New Registrations......</p></div>
                    <div className="c"><img src="https://i.ibb.co/Sym6G7C/Alerts-icon.png" alt="Alerts-icon" border="0" /> <p>Alerts......</p></div>
                    <div className="c"><img src="https://i.ibb.co/C03Zx57/Signature-icon.png" alt="Signature-icon" border="0" /> <p>Signature......</p></div>
                    <div className="c"><img src="https://i.ibb.co/dmX5wrs/Patient-called-icon.png" alt="Patient-called-icon" border="0" /> <p>Pations Called......</p></div>
                    <div className="c"><img src="https://i.ibb.co/BzMztvn/dr-ai-icon.png" alt="dr-ai-icon" border="0" /> <p>Dr.AI......</p></div>
                </div>

                <div className="s">
                    <div className="sec">
                        <label htmlFor="status">Status:</label>
                        <select id="status">
                            <option>All</option>
                            <option>Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div className="sec">
                        <label htmlFor="criticality">Criticality:</label>
                        <select id="criticality">
                            <option>All</option>
                            <option>Criticality</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>

                    <div className="sec">
                        <label htmlFor="trigger">Trigger:</label>
                        <select id="trigger">
                            <option>All</option>
                            <option>Trigger</option>
                            <option>Trigger 1</option>
                            <option>Trigger 2</option>
                            <option>Trigger 3</option>
                        </select>
                    </div>

                    <div className="sec">
                        <label htmlFor="arrhythmia">Arrhythmia Type:</label>
                        <select id="arrhythmia">
                            <option>All</option>
                            <option>Arrhythmia Type</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                        </select>
                    </div>

                    <div className="sec">
                        <label htmlFor="start-datetime">Start Date/Time:</label>
                        <select id="start-datetime">
                            <option>Start Date/Time</option>
                            <option>2024-05-20 14:00</option>
                            <option>2024-05-21 10:00</option>
                        </select>
                        <select>
                            <option>hh:mm</option>
                        </select>
                    </div>

                    <div className="sec">
                        <label htmlFor="end-datetime">End Date/Time:</label>
                        <select id="end-datetime">
                            <option>End Date/Time</option>
                            <option>2024-05-20 16:00</option>
                            <option>2024-05-21 12:00</option>
                        </select>
                        <select>
                            <option>hh:mm</option>
                        </select>
                    </div>
                </div>

                <div className="patient-data">
                    <table className="patient-table">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Status</th>
                                <th>Enrollment Type</th>
                                <th>Device ID</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Remaining Time</th>
                                <th>Provider</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (
                                <tr key={index}>
                                    <td className="ss">
                                        <img src="https://i.ibb.co/SnywxQf/woman-6466382-1280.jpg" alt="User" className="user-image" />
                                        <span className="patient-name">
                                            {patient.name} <TiArrowSortedDown />
                                        </span>
                                    </td>
                                    <td className={`status ${patient.status.toLowerCase()}`}>{patient.status}</td>
                                    <td>{patient.type}</td>
                                    <td>{patient.deviceId}</td>
                                    <td>{patient.startDate}</td>
                                    <td>{patient.endDate}</td>
                                    <td>{patient.remainingDays} days</td>
                                    <td>{patient.provider}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="but">
                    <div className="bu1">
                        <select>
                            <option>10</option>
                        </select>
                        <span>  Items Per Page</span>
                        <span className="spp">Total Items: 4</span>
                    </div>
                    <div className="bu2">
                        <button><FaAngleLeft />Previous Next<FaAngleRight /> Page 1 of 1</button>
                    </div>
                </div>

                <div className="footer">
                    <p className="pa">If this is a medical emergency, then please dial 911 or go to the nearest medical facility immediately</p>
                    <div className="so">
                        <p className="par">Copyright @ 2024 <span className="blu">avhita, Inc.</span> All rights reserved.</p>
                        <p>
                            <span className="fle">Terms of use</span>
                            <span className="fle">Privacy Policy</span>
                            <span className="fle">HIPAA Compliance</span>
                            <span className="lo">1-877-XXX-XXX</span>
                            <span className="sm">info@avhita.health</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
