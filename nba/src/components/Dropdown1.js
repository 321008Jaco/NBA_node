import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownOne = ({ onSelectWeapon }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [weaponData, setWeaponData] = useState([]);
  const [creatureNames, setCreatureNames] = useState([]);
  const [bossNames, setBossNames] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === 'Weapons') {
      axios.get('https://eldenring.fanapis.com/api/weapons')
        .then((response) => {
          console.log('Weapons Data:', response.data);
          setWeaponData(response.data.data.map((weapon) => ({ id: weapon.id, name: weapon.name })));
        })
        .catch((error) => console.log(error));
    } else if (selectedValue === 'Creatures') {
      axios.get('https://eldenring.fanapis.com/api/creatures')
        .then((response) => {
          console.log('Creatures Data:', response.data);
          setCreatureNames(response.data.data.map((creature) => creature.name));
        })
        .catch((error) => console.log(error));
    } else if (selectedValue === 'Bosses') {
      axios.get('https://eldenring.fanapis.com/api/bosses')
        .then((response) => {
          console.log('Bosses Data:', response.data);
          setBossNames(response.data.data.map((boss) => boss.name));
        })
        .catch((error) => console.log(error));
    }
  }, [selectedValue]);

  const handleWeaponSelect = (event) => {
    const selectedWeaponId = event.target.value;
    const selectedWeapon = weaponData.find(weapon => weapon.id === selectedWeaponId);
    onSelectWeapon(selectedWeapon);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Bosses">Bosses</option>
        <option value="Creatures">Creatures</option>
        <option value="Weapons">Weapons</option>
      </select>

      {selectedValue === 'Weapons' && (
        <select onChange={handleWeaponSelect}>
          <option value="">Select a weapon</option>
          {weaponData.map((weapon) => (
            <option key={weapon.id} value={weapon.id}>
              {weapon.name}
            </option>
          ))}
        </select>
      )}

      {selectedValue === 'Creatures' && (
        <selecton>
          <option value="">Select a creature</option>
          {creatureNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </selecton>
      )}

      {selectedValue === 'Bosses' && (
        <select>
          <option value="">Select a Boss</option>
          {bossNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default DropdownOne;