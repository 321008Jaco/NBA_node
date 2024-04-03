import React, { useState, useEffect } from 'react';
import DropdownOne from '../components/Dropdown1';
import WeaponDisplay from './FetchWeaponById';
import WeaponDropdown from '../components/Dropdown2';
import Weapon from '../components/weaponsAPI';
import DropdownTwo from '../components/Dropdown2';
import axios from 'axios';
import './compare.css';

const Compare = () => {
  const [selectedWeaponId, setSelectedWeaponId] = useState('');

  const handleSelectWeapon = (weaponId) => {
    setSelectedWeaponId(weaponId);
  };

  return (
    <div className="compare-container">
      <div className="big-column left-column">
        Primary
        <DropdownOne onSelectWeapon={handleSelectWeapon} />
        {/* DropdownTwo should only be rendered once */}
      </div>
      <div className="small-column">
        {/* Content Here */}
        Compare
      </div>
      <div className="big-column right-column">
        {/* Content Here */}
        Secondary
        {/* Another instance of DropdownOne */}
        <DropdownTwo selectedWeaponId={selectedWeaponId} />
      </div>
    </div>
  );
};

export default Compare;

