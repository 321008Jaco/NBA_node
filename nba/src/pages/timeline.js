import React, { useEffect, useState } from 'react';
import './timeline.css';
import LineChart from '../components/linechart';

const Timeline = () => {
  const [weaponsByCategory, setWeaponsByCategory] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <div className="timeline-graph-container">
        <div className="timeline-main-column">
          <div className="content">
            <h2>Elden Ring Release dates</h2>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
