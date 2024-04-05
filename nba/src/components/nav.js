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

      <div className="svg-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          {/* Add your SVG code for the first icon here */}
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          {/* Add your SVG code for the second icon here */}
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          {/* Add your SVG code for the third icon here */}
        </svg>
      </div>


    </nav>
  );
};

export default Navigation;