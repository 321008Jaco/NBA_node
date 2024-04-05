import './home.css';
import React, { useEffect, useState } from "react";
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
      <h1>Home Page</h1>
      <div className="container">
        <div className="top-columns">
          <div className="main-column">
            <div className="content">
              <div className='pie-chart-container'>
                <PieChart />
              </div>
            </div>
          </div>
          <div className="side-column">
            <div className="content">
              <FetchRandomBoss reset={resetFetch} />
              <button onClick={fetchRandomBoss}>Fetch Random Boss</button>
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
      <div className="container">
        <div className="fourth-column">
          <div className="content">
            <h2>Compare Your weapons</h2>
            <div class="custom-loader"></div>
          </div>
        </div>
      <div className="fifth-column">
        <div className="content">
          <h2>Check Out The Timeline</h2>
          <div class="custom-loader-time"></div>
        </div>
      </div>
    </div>
  </div>
  );
};



export default Home;
