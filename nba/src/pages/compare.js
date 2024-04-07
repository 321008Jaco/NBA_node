import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparePie from '../components/comparePie';
import CompareRadar from '../components/compareRadar';
import CompareBar from '../components/compareBar';
import './compare.css';


const Compare = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeaponLeft, setSelectedWeaponLeft] = useState(null);
  const [selectedWeaponRight, setSelectedWeaponRight] = useState(null);
  const [attackDifference, setAttackDifference] = useState({});
  const [defenseDifference, setDefenseDifference] = useState({});

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/weapons')
      .then(response => {
        setWeapons(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching weapons:', error);
      });
  }, []);

  const handleLeftWeaponSelect = (weapon) => {
    setSelectedWeaponLeft(weapon);
  };

  const handleRightWeaponSelect = (weapon) => {
    setSelectedWeaponRight(weapon);
  };

  const handleCompareClick = () => {
    if (selectedWeaponLeft && selectedWeaponRight) {
      const leftAttack = selectedWeaponLeft.attack.reduce((total, attack) => {
        return {
          ...total,
          [attack.name.toLowerCase()]: attack.amount
        };
      }, {});
      const rightAttack = selectedWeaponRight.attack.reduce((total, attack) => {
        return {
          ...total,
          [attack.name.toLowerCase()]: attack.amount
        };
      }, {});
      const leftDefense = selectedWeaponLeft.defence.reduce((total, defense) => {
        return {
          ...total,
          [defense.name.toLowerCase()]: defense.amount
        };
      }, {});
      const rightDefense = selectedWeaponRight.defence.reduce((total, defense) => {
        return {
          ...total,
          [defense.name.toLowerCase()]: defense.amount
        };
      }, {});

      const attackDiff = {};
      const defenseDiff = {};

      Object.keys(leftAttack).forEach(key => {
        attackDiff[key] = leftAttack[key] - rightAttack[key];
      });

      Object.keys(leftDefense).forEach(key => {
        defenseDiff[key] = leftDefense[key] - rightDefense[key];
      });

      setAttackDifference(attackDiff);
      setDefenseDifference(defenseDiff);
    } else {
      console.log('Please select two weapons to compare.');
    }
  };

  return (
    <div className="compare-container">
      <div className="top-columns">
        <div className="column left-column">
          <div className='dropdown-one'>
            <select onChange={(e) => handleLeftWeaponSelect(JSON.parse(e.target.value))}>
              <option value="">Select a weapon</option>
              {weapons.map(weapon => (
                <option key={weapon.id} value={JSON.stringify(weapon)}>
                  {weapon.name}
                </option>
              ))}
            </select>
          </div>
          {selectedWeaponLeft && (
            <div className="weapon-info">
              <h2>{selectedWeaponLeft.name}</h2>
              <p>Description: {selectedWeaponLeft.description}</p>
              <p>Category: {selectedWeaponLeft.category}</p>
              <p>Weight: {selectedWeaponLeft.weight}</p>
              <h3>Attack</h3>
              <ul>
                {selectedWeaponLeft.attack.map((attack, index) => (
                  <li key={index}>{attack.name}: {attack.amount}</li>
                ))}
              </ul>
              <h3>Defense</h3>
              <ul>
                {selectedWeaponLeft.defence.map((defense, index) => (
                  <li key={index}>{defense.name}: {defense.amount}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="column small-column">
        <button onClick={handleCompareClick}>Compare</button>
        {Object.keys(attackDifference).length > 0 && (
          <>
            <h3>Attack Difference</h3>
            <ul>
              {Object.entries(attackDifference).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
              ))}
            </ul>
            <h3>Defense Difference</h3>
            <ul>
              {Object.entries(defenseDifference).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
              ))}
            </ul>
          </>
        )}
      </div>
        <div className="column right-column">
          <div className='dropdown-one'>
            <select onChange={(e) => handleRightWeaponSelect(JSON.parse(e.target.value))}>
              <option value="">Select a weapon</option>
              {weapons.map(weapon => (
                <option key={weapon.id} value={JSON.stringify(weapon)}>
                  {weapon.name}
                </option>
              ))}
            </select>
          </div>
          {selectedWeaponRight && (
            <div className="weapon-info">
              <h2>{selectedWeaponRight.name}</h2>
              <p>Description: {selectedWeaponRight.description}</p>
              <p>Category: {selectedWeaponRight.category}</p>
              <p>Weight: {selectedWeaponRight.weight}</p>
              <h3>Attack</h3>
              <ul>
                {selectedWeaponRight.attack.map((attack, index) => (
                  <li key={index}>{attack.name}: {attack.amount}</li>
                ))}
              </ul>
              <h3>Defense</h3>
              <ul>
                {selectedWeaponRight.defence.map((defense, index) => (
                  <li key={index}>{defense.name}: {defense.amount}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-columns">
        <div className="column pie-chart">
          {Object.keys(attackDifference).length > 0 && (
            <ComparePie attackDifference={attackDifference} />
          )}
        </div>
        <div className="column radar-chart">
          {selectedWeaponLeft && selectedWeaponRight && (
            <CompareRadar
              selectedWeaponLeft={selectedWeaponLeft}
              selectedWeaponRight={selectedWeaponRight}
            />
          )}
        </div>

      </div>

      <div className="column bar-chart">
          <CompareBar />
        </div>

      </div>

  );
};

export default Compare;