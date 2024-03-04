import './home.css';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <div className="top-columns">
          <div className="main-column">
            <div className="content">
              {/* Your main content goes here */}
            </div>
          </div>
          <div className="side-column">
            <div className="content">
              {/* Your side content goes here */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="third-column">
          <div className="content">
            {/* Your third column content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;