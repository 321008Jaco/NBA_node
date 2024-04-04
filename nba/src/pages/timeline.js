import React, { useEffect, useState } from "react";
import PieChart from '../components/piechart';
import Dropdown from "../components/Dropdown";
import './timeline.css';
import axios from "axios";

const Timeline = () => {
  const [weaponsByCategory, setWeaponsByCategory] = useState([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/weapons');
        const weaponsData = response.data.data;
        const categoryCounts = {};
        
        // Count weapons in each category
        weaponsData.forEach((weapon) => {
          const category = weapon.category;
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });

        // Convert category counts to array for PieChart data
        const weaponsByCategoryArray = Object.entries(categoryCounts).map(([category, count]) => ({
          category,
          count,
        }));

        setWeaponsByCategory(weaponsByCategoryArray);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Timeline Page</h1>
      <div className="timeline-graph-container">
        <div className="timeline-main-column">
          <div className="content">
            {/* Content of the main column */}
          </div>
        </div>
        <div className="timeline-side-column">
          <div className="content">
            <div style={{ width: '100%', height: 'auto' }}>
              <PieChart data={weaponsByCategory} />
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-container">
        <div className="timeline-third-column">
          <div className="content">
            {/* Content of the third column */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;