import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './apiCall.css';

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
          <p className="description"><strong>Description:</strong> {boss.description}</p>
          <p className="text"><strong>Location:</strong> {boss.location}</p>
          <p className="text"><strong>Drops:</strong></p>
          <ul>
            {boss.drops.map((drop, index) => (
              <li key={index} className="text">{drop}</li>
            ))}
          </ul>
          <p className="text"><strong>Health Points:</strong> {boss.healthPoints}</p>
        </div>
      )}
    </div>
  );
  
  
};

export default FetchRandomBoss;

