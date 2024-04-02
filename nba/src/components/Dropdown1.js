import React, { useState, useEffect } from 'react';

const Dropdown1 = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [weaponNames, setWeaponNames] = useState([]);
  const [creatureNames, setCreatureNames] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === 'Weapons') {
      fetch('https://eldenring.fanapis.com/api/weapons')
        .then((response) => response.json())
        .then((data) => {
          setWeaponNames(data.data.map((weapon) => weapon.name));
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

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Bosses">Bosses</option>
        <option value="Creatures">Creatures</option>
        <option value="Weapons">Weapons</option>
      </select>

      {selectedValue === 'Weapons' && (
        <select>
          <option value="">Select a weapon</option>
          {weaponNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
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

export default Dropdown1;


