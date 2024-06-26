import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function getRandomWeapon() {
  try {
    const response = await axios.get('https://eldenring.fanapis.com/api/weapons/');
    const weaponData = response.data.data[0];
    return weaponData;
  } catch (error) {
    console.error('Error fetching weapon data:', error);
    return null;
  }
}

function Weapon(data) {
  const [weapon, setWeapon] = useState(null);

  useEffect(() => {
    async function fetchWeapon() {
      const weaponData = await getRandomWeapon();
      setWeapon(weaponData);
      console.log(weaponData)
    }

    fetchWeapon();
  }, [data]);

  if (!weapon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{weapon.name}</h1>
      <img src={weapon.image} alt={weapon.name} />
      <p>{weapon.description}</p>
      <h2>Attack</h2>
      <ul>
        {weapon.attack.map((attack, index) => (
          <li key={index}>
            {attack.name}: {attack.amount}
          </li>
        ))}
      </ul>
      <h2>Defence</h2>
      <ul>
        {weapon.defence.map((defence, index) => (
          <li key={index}>
            {defence.name}: {defence.amount}
          </li>
        ))}
      </ul>
      <h2>Scales With</h2>
      <ul>
        {weapon.scalesWith.map((scale, index) => (
          <li key={index}>
            {scale.name}: {scale.scaling}
          </li>
        ))}
      </ul>
      <h2>Required Attributes</h2>
      <ul>
        {weapon.requiredAttributes.map((attribute, index) => (
          <li key={index}>
            {attribute.name}: {attribute.amount}
          </li>
        ))}
      </ul>
      <p>Category: {weapon.category}</p>
      <p>Weight: {weapon.weight}</p>
    </div>
  );
}


async function getWeaponById(weaponId) {
  try {
    const response = await axios.get(`https://eldenring.fanapis.com/api/weapons/${weaponId}`);
    const weaponData = response.data.data[0];
    return {
      id: weaponData.id,
      name: weaponData.name,
      image: weaponData.image,
      description: weaponData.description,
      category: weaponData.category,
      weight: weaponData.weight,
      attack: weaponData.attack,
      defence: weaponData.defence,
      requiredAttributes: weaponData.requiredAttributes,
      scalesWith: weaponData.scalesWith
    };
  } catch (error) {
    console.error('Error fetching weapon data by ID:', error);
    return null;
  }
}

export default getWeaponById;