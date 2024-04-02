import React, { useState } from 'react';
import axios from 'axios';

const FetchWeaponById = () => {
    const [weaponData, setWeaponData] = useState(null);

    const fetchWeaponData = async (id) => {
        try {
            const response = await axios.get(`https://eldenring.fanapis.com/api/weapons`);
            console.log('Response:', response.data); // Check the response from the API
            const weaponData = response.data.data[0];

            const formattedData = {
                success: true,
                count: 1,
                data: [weaponData]
            };

            console.log('Formatted Data:', formattedData); // Check the formatted data
            setWeaponData(formattedData);
        } catch (error) {
            console.error('Error fetching weapon data:', error);
        }
    };

    return (
        <div>
            {/* Your component JSX here */}
        </div>
    );
};

export default FetchWeaponById;






