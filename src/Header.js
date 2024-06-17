import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSlidersH, FaRegUserCircle } from 'react-icons/fa';
import { TiThLargeOutline, TiArrowSortedDown } from 'react-icons/ti';
import { PiLineVerticalBold } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';
import './Header.css';

const Header = ({ onLogout}) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.ibb.co/D5qS8Bq/Logo-Icon.png" alt="Logo-Icon" border="0" />
        <div className='big-pipe'><PiLineVerticalBold color="#ffffff" className="sp" /></div>
        <Link to="/dashboard">
          <img src="https://i.ibb.co/51JDNJF/Header-Dashboard-icon.png" alt="Header-Dashboard-icon" className="image" />
        </Link>
        <img src="https://i.ibb.co/8s31hdX/Header-Reports-Icon-2.png" alt="Header-Reports-Icon-2" className="image" />
        <img src="https://i.ibb.co/jy64Mmj/Header-Reports-Icon-1.png" alt="Logo" className="image" />
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for patients..." />
        <FaSlidersH className="filter-icon" />
        <TiThLargeOutline className="three" size={60} />
        <div className="gradeint-container">
          <img src="https://i.ibb.co/pLtXtwF/gradient.png" alt="logo" className="gradient-logo" />
        </div>
      </div>

      <div className="user-info">
        <span className="user-icon-size">
          <FaRegUserCircle />
        </span>
        <span>Dr.Suresh Kumar</span>
        <PiLineVerticalBold className="pipe" />
        <span>Profile & Settings</span>
        <TiArrowSortedDown />
        <PiLineVerticalBold className="pipe" />
        <span onClick={onLogout} className="logout-text">
          Logout
        </span>
        <button onClick={onLogout}className="logout-button">
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;