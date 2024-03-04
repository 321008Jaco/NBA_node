import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/compare" className="nav-link">
            Compare
          </Link>
        </li>
        <li>
          <Link to="/timeline" className="nav-link">
            Timeline
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;