import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getWeaponById(weaponId) {
    try {
      const response = await axios.get(`https://eldenring.fanapis.com/api/weapons/${weaponId}`);
      const weaponData = response.data.data[0];
      console.log('Weapon Data:', weaponData);
      return weaponData;
    } catch (error) {
      console.error('Error fetching weapon data by ID:', error);
      return null;
    }
  }
  
  export default getWeaponById;
