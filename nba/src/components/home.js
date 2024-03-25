import './home.css';
import React from 'react';
import HomeChart from './barchart';
import FetchData from './apiCall';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <div className="top-columns">
          <div className="main-column">
            <div className="content">
              {/* content here */}
            </div>
          </div>
          <div className="side-column">
            <div className="content">
            {/* content here */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="third-column">
          <div className="content">
          <HomeChart />
          </div>
        </div>
      </div>

      {/* <FetchData /> */}

    </div>

    
  );
};

export default Home;