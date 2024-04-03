import React, { useState, useEffect } from 'react';
import fetchWeaponData from '../pages/FetchWeaponById';
import Weapon from './weaponsAPI';
import Creatures from './creaturesAPI';
import getWeaponById from './weaponsAPI';
import axios from 'axios';

const DropdownTwo = ({ selectedOption }) => {
    const [options, setOptions] = useState([]);
    const [selectedWeaponId, setSelectedWeaponId] = useState('');
    const [weaponData, setWeaponData] = useState(null);
  
    useEffect(() => {
      if (selectedOption === 'Weapons') {
        fetchWeapons();
      } else {
        // Clear options if DropdownOne selects other options
        setOptions([]);
        setSelectedWeaponId('');
        setWeaponData(null);
      }
    }, [selectedOption]);
  
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/weapons');
        const weaponOptions = response.data.data.map((weapon) => ({
          id: weapon.id,
          name: weapon.name
        }));
        setOptions(weaponOptions);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };
  
    const fetchWeaponData = async (id) => {
      try {
        const response = await axios.get(`https://eldenring.fanapis.com/api/weapons/${id}`);
        const weaponData = response.data.data[0];
        setWeaponData(weaponData);
      } catch (error) {
        console.error('Error fetching weapon data:', error);
      }
    };
  
    const handleSelectChange = async (event) => {
      setSelectedWeaponId(event.target.value);
      if (event.target.value) {
        fetchWeaponData(event.target.value);
      }
    };
  
    return (
      <div>
        <select value={selectedWeaponId} onChange={handleSelectChange}>
          <option value="">Select a weapon</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
  
        {weaponData && (
          <div>
            <h2>{weaponData.name}</h2>
            <p>Description: {weaponData.description}</p>
            <p>Category: {weaponData.category}</p>
            <p>Weight: {weaponData.weight}</p>
            <h3>Attack</h3>
            <ul>
              {weaponData.attack.map((attack, index) => (
                <li key={index}>{attack.name}: {attack.amount}</li>
              ))}
            </ul>
            <h3>Defence</h3>
            <ul>
              {weaponData.defence.map((defence, index) => (
                <li key={index}>{defence.name}: {defence.amount}</li>
              ))}
            </ul>
            <h3>Scales With</h3>
            <ul>
              {weaponData.scalesWith.map((scaling, index) => (
                <li key={index}>{scaling.name}: {scaling.scaling}</li>
              ))}
            </ul>
            <h3>Required Attributes</h3>
            <ul>
              {weaponData.requiredAttributes.map((attribute, index) => (
                <li key={index}>{attribute.name}: {attribute.amount}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default DropdownTwo;