import './home.css';
import React, { useEffect, useState } from "react";
import HomeChart from './barchart';
import FetchRandomBoss from './apiCall';
import axios from 'axios';

const Home = () => {
  const [resetFetch, setResetFetch] = useState(false);

  const fetchRandomBoss = () => {
    setResetFetch(!resetFetch); // Toggle the resetFetch state to trigger a re-fetch
  };

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
              <FetchRandomBoss reset={resetFetch} />
              <button onClick={fetchRandomBoss}>Fetch Random Boss</button> {/* Button to fetch a random boss */}
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
    </div>
  );
};

export default Home;
