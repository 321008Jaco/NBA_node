import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HomeChart from './barchart';
import FetchRandomBoss from './apiCall';
import PieChart from './piechart';
import axios from 'axios';

const Home = () => {
  const [resetFetch, setResetFetch] = useState(false);

  const fetchRandomBoss = () => {
    setResetFetch(!resetFetch);
  };

  return (
    <div className='home-container'>
      <div className="container">
        <div className="top-columns">
          <div className="main-column">
            <div className="content-One">
              <div className='pie-chart-container'>
                <PieChart />
              </div>
            </div>
          </div>
          <div className="side-column">
            <div className="content-One">
              <FetchRandomBoss reset={resetFetch} />
              <button onClick={fetchRandomBoss}>Fetch Random Boss</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="third-column">
          <div className="content-One">
            <HomeChart />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fourth-column">
          <div className="content-One">
            <Link to="/compare">
              <h2 className="custom-link">Compare Your weapons In the Compare Page</h2>
              <div className="custom-loader"></div>
            </Link>
          </div>
        </div>
        <div className="fifth-column">
          <div className="content-One">
            <Link to="/timeline">
              <h2 className="custom-link">Check Out The Timeline Page</h2>
              <div className="custom-loader-time"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
