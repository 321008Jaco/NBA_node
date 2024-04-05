import React, { useEffect, useState } from 'react';
import './timeline.css';
import LineChart from '../components/linechart';

const Timeline = () => {
  const [weaponsByCategory, setWeaponsByCategory] = useState([]);

  useEffect(() => {
    // No weapon-related code in this useEffect
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Timeline Page</h1>
      <div className="timeline-graph-container">
        <div className="timeline-main-column">
          <div className="content">
            {/* <LineChart /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
