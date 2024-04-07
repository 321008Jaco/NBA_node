import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { HiScale } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";
import './nav.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className='Logo'></div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
          <HiHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/compare" className="nav-link">
            <HiScale />
            Compare
          </Link>
        </li>
        <li>
          <Link to="/timeline" className="nav-link">
            <HiClock />
            Timeline
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;