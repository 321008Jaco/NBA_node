import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function getRandomCreature() {
  try {
    const response = await axios.get('https://eldenring.fanapis.com/api/creatures/');
    const creatureData = response.data.data[0];
    return creatureData;
  } catch (error) {
    console.error('Error fetching creature data:', error);
    return null;
  }
}

function Creature(data) {
  const [creature, setCreature] = useState(null);

  useEffect(() => {
    async function fetchCreature() {
      const creatureData = await getRandomCreature();
      setCreature(creatureData);
      console.log(creatureData)
    }

    fetchCreature();
  }, [data]);

  if (!creature) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{creature.name}</h1>
      <img src={creature.image} alt={creature.name} />
      <p>{creature.description}</p>
      <p>Location: {creature.location}</p>
      <p>Drops: {creature.drops}</p>
    </div>
  );
}

export default Creature;
