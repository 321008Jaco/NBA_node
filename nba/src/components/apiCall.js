import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchRandomBoss = ({ reset }) => {
  const [boss, setBoss] = useState(null);

  useEffect(() => {
    const fetchRandomBoss = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/bosses');
        const randomBoss = response.data.data[Math.floor(Math.random() * response.data.data.length)];
        setBoss(randomBoss);
      } catch (error) {
        console.error('Error fetching random boss:', error);
      }
    };

    fetchRandomBoss();
  }, [reset]); // Trigger fetch when reset prop changes

  return (
    <div className="boss-container">
      {boss && (
        <div className="boss-item">
          <img src={boss.image} alt={boss.name} />
          <p className="description">{boss.name}</p>
          <p className="text">Description: {boss.description}</p>
          <p className="text">Location: {boss.location}</p>
          <p className="text">Drops:</p>
          <ul>
            {boss.drops.map((drop, index) => (
              <li key={index} className="text">{drop}</li>
            ))}
          </ul>
          <p className="text">Health Points: {boss.healthPoints}</p>
        </div>
      )}
    </div>
  );
};

export default FetchRandomBoss;

