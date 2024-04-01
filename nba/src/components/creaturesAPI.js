import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Creatures = () => {
  const [creature, setCreature] = useState(null);

  useEffect(() => {
    const fetchRandomCreature = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/creatures');
        const randomIndex = Math.floor(Math.random() * response.data.data.length);
        setCreature(response.data.data[randomIndex]);
      } catch (error) {
        console.error('Error fetching creature:', error);
      }
    };

    fetchRandomCreature();
  }, []);

  return (
    <div>
      {creature && (
        <div style={{ marginBottom: '20px' }}>
          <img src={creature.image} alt={creature.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <div>
            <h3>{creature.name}</h3>
            <p><strong>Description:</strong> {creature.description}</p>
            <p><strong>Location:</strong> {creature.location}</p>
            <p><strong>Drops:</strong> {creature.drops.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creatures;


