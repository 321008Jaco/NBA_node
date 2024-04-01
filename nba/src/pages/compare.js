import React, { useState, useEffect } from 'react';
import DropdownOne from '../components/Dropdown1';
import FetchWeaponById from './FetchWeaponById';
import DropdownTwo from '../components/Dropdown2';
import axios from 'axios';

const Compare = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeaponId, setSelectedWeaponId] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('/api/weapons');
        setWeapons(response.data);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };

    fetchWeapons();
  }, []);

  const handleWeaponSelect = (weaponId) => {
    setSelectedWeaponId(weaponId);
  };

  return (
    <div className="compare-container">
      <DropdownOne />
      <div className="compare-column">
        {weapons && weapons.length > 0 && (
          <DropdownTwo weapons={weapons} onSelectWeapon={handleWeaponSelect} />
        )}
      </div>
      <div className="compare-column">
        <FetchWeaponById weaponId={selectedWeaponId} />
      </div>
      <div className="compare-column">
        {/* Other content for the third column */}
      </div>
    </div>
  );
};

export default Compare;