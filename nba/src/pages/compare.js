import React, { useState, useEffect } from 'react';
import DropdownOne from '../components/Dropdown1';
import WeaponDisplay from './FetchWeaponById';
import WeaponDropdown from '../components/Dropdown2';
import Weapon from '../components/weaponsAPI';
import DropdownTwo from '../components/Dropdown2';
import axios from 'axios';
import './compare.css';

const Compare = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="compare-container">
      <div className="big-column left-column">
        Primary
        <DropdownOne onSelectOption={handleDropdownChange} />
        <DropdownTwo selectedOption={selectedOption} />
        {/* <WeaponDisplay weapon={selectedWeapon} /> */}
      </div>
      <div className="small-column">
        {/* Content Here */}
        Compare
      </div>
      <div className="big-column right-column">
        {/* Content Here */}
        Secondary
        <DropdownOne onSelectOption={handleDropdownChange} />
      </div>
    </div>
  );
};

export default Compare;


