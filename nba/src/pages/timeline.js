import React, { useEffect, useState } from "react";
import PieChart from '../components/piechart';
import Dropdown from "../components/Dropdown";
import axios from "axios";

const Timeline = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState('');

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/weapons');
        setWeapons(response.data.data);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };

    fetchWeapons();
  }, []);

  const handleSelectWeapon = (event) => {
    setSelectedWeapon(event.target.value);
  };

  return (
    <div>
      <h1>Timeline Page</h1>
      <div className="graph-container">
        <div className="top-columns">
          <div className="main-column">
            <div className="content">
              {/* content here */}
            </div>
          </div>
          <div className="side-column">
            <div className="content">
            <select>
              {weapons.map((weapon) => (
                <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
              ))}
            </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="third-column">
          <div className="content">

            {selectedWeapon && <PieChart weaponId={selectedWeapon} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;