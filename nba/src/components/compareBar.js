import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const CompareBar = () => {
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/weapons')
      .then(response => {
        const weaponsInfo = response.data.data.map(weapon => ({
          name: weapon.name,
          weight: weapon.weight
        }));
        setWeaponsData(weaponsInfo);
      })
      .catch(error => {
        console.error('Error fetching weapons data:', error);
      });
  }, []);

  const data = {
    labels: weaponsData.map(weapon => weapon.name),
    datasets: [
      {
        label: 'Weight',
        data: weaponsData.map(weapon => weapon.weight),
        backgroundColor: '#245a46',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Chart - Weapon Weights</h2>
      <Bar data={data} />
    </div>
  );
};

export default CompareBar;