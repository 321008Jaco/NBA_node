import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function getRandomBoss() {
    try {
      const response = await axios.get('https://eldenring.fanapis.com/api/bosses/');
      const bossData = response.data.data[0];
      return bossData;
    } catch (error) {
      console.error('Error fetching boss data:', error);
      return null;
    }
  }
  
  function Boss(data) {
    const [boss, setBoss] = useState(null);
  
    useEffect(() => {
      async function fetchBoss() {
        const bossData = await getRandomBoss();
        setBoss(bossData);
        console.log(bossData)
      }
  
      fetchBoss();
    }, [data]);
  
    if (!boss) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{boss.name}</h1>
        <img src={boss.image} alt={boss.name} />
        <p>{boss.description}</p>
        <p>Location: {boss.location}</p>
        <p>Drops: {boss.drops}</p>
        <p>Health Points: {boss.healthpoints}</p>
      </div>
    );
  }
  
  export default Boss;