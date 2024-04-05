import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = () => {
  const [weaponData, setWeaponData] = useState([]);

  useEffect(() => {
    const fetchWeaponData = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/weapons');
        setWeaponData(response.data.data);
      } catch (error) {
        console.error('Error fetching weapon data:', error);
      }
    };

    fetchWeaponData();
  }, []);

  const groupWeaponsByCategory = () => {
    const grouped = {};
    weaponData.forEach((weapon) => {
      if (!grouped[weapon.category]) {
        grouped[weapon.category] = 0;
      }
      grouped[weapon.category]++;
    });
    return grouped;
  };

  const weaponCategories = Object.keys(groupWeaponsByCategory());
  const weaponCounts = Object.values(groupWeaponsByCategory());

  const data = {
    labels: weaponCategories,
    datasets: [
      {
        data: weaponCounts,
        backgroundColor: [
          '#368668',
          '#161719',
          '#2C3135',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Number of Weapons in Each Category</h2>
      <Pie data={data} />
    </div>
  );

};

export default PieChart;
