import React, { useState, useEffect } from 'react';

const DropdownOne = ({ onSelectWeapon }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [weaponData, setWeaponData] = useState([]);
  const [creatureNames, setCreatureNames] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === 'Weapons') {
      fetch('https://eldenring.fanapis.com/api/weapons')
        .then((response) => response.json())
        .then((data) => {
          setWeaponData(data.data.map((weapon) => ({ id: weapon.id, name: weapon.name })));
        })
        .catch((error) => console.log(error));
    } else if (selectedValue === 'Creatures') {
      fetch('https://eldenring.fanapis.com/api/creatures')
        .then((response) => response.json())
        .then((data) => {
          setCreatureNames(data.data.map((creature) => creature.name));
        })
        .catch((error) => console.log(error));
    } else if (selectedValue === 'Bosses') {
      fetch('https://eldenring.fanapis.com/api/bosses')
        .then((response) => response.json())
        .then((data) => {
          setCreatureNames(data.data.map((creature) => creature.name));
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
        <select>
          <option value="">Select a creature</option>
          {creatureNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}

      {selectedValue === 'Bosses' && (
        <select>
          <option value="">Select a Boss</option>
          {creatureNames.map((name, index) => (
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




