import React, { useState, useEffect } from 'react';
import fetchWeaponData from '../pages/FetchWeaponById';
import Weapon from './weaponsAPI';
import getWeaponById from '../pages/FetchWeaponById';
import axios from 'axios';


const DropdownTwo = ({ selectedOption }) => {
  const [options, setOptions] = useState([]);
  const [selectedWeaponId, setSelectedWeaponId] = useState('');
  const [weaponData, setWeaponData] = useState(null);
  const [creatureData, setCreatureData] = useState([]);
  const [bossData, setBossData] = useState([]);

  useEffect(() => {
    if (selectedOption === 'Weapons') {
      fetchWeapons();
    } else if (selectedOption === 'Creatures') {
      fetchCreatures();
    } else if (selectedOption === 'Bosses') {
      fetchBosses();
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

  const fetchCreatures = async () => {
    try {
      const response = await axios.get('https://eldenring.fanapis.com/api/creatures');
      setCreatureData(response.data.data);
    } catch (error) {
      console.error('Error fetching creatures:', error);
    }
  };

  const fetchBosses = async () => {
    try {
      const response = await axios.get('https://eldenring.fanapis.com/api/bosses');
      setBossData(response.data.data);
    } catch (error) {
      console.error('Error fetching bosses:', error);
    }
  };

  const handleSelectChange = async (event) => {
    setSelectedWeaponId(event.target.value);
    if (event.target.value) {
      fetchWeaponData(event.target.value)
        .then((weapon) => setWeaponData(weapon))
        .catch((error) => console.error('Error fetching weapon data by ID:', error));
    }
  };

  return (
    <div>
      <select value={selectedWeaponId} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>

      {/* Display data based on selected option */}
      {selectedOption === 'Weapons' && (
        <div>
          {weaponData && (
            <div>
              <h1>{weaponData.name}</h1>
              <img src={weaponData.image} alt={weaponData.name} />
              <p>{weaponData.description}</p>
              <p>Category: {weaponData.category}</p>
              <p>Weight: {weaponData.weight}</p>
              <h2>Attack</h2>
              <ul>
                {weaponData.attack.map((attack, index) => (
                  <li key={index}>
                    {attack.name}: {attack.amount}
                  </li>
                ))}
              </ul>
              <h2>Defence</h2>
              <ul>
                {weaponData.defence.map((defence, index) => (
                  <li key={index}>
                    {defence.name}: {defence.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {selectedOption === 'Creatures' && (
        <div>
          {/* Display creature data here */}
        </div>
      )}

      {selectedOption === 'Bosses' && (
        <div>
          {/* Display boss data here */}
        </div>
      )}
    </div>
  );
};

export default DropdownTwo;