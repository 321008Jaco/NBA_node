import React, { useState, useEffect } from 'react';
import fetchWeaponData from '../pages/FetchWeaponById';
import Weapon from './weaponsAPI';
import Creatures from './creaturesAPI';
import axios from 'axios';

const DropdownTwo = ({ selectedOption }) => {
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [weaponData, setWeaponData] = useState(null);

    useEffect(() => {
        if (selectedOption === 'Weapons') {
            fetchWeapons();
        } else {
            // Clear options if DropdownOne selects other options
            setOptions([]);
            setSelectedValue('');
            setWeaponData(null);
        }
    }, [selectedOption]);

    const fetchWeapons = async () => {
        try {
            const response = await axios.get('https://eldenring.fanapis.com/api/weapons');
            const weaponOptions = response.data.data.map((weapon) => ({
                value: weapon.id,
                label: weapon.name
            }));
            setOptions(weaponOptions);
        } catch (error) {
            console.error('Error fetching weapons:', error);
        }
    };

    const fetchWeaponData = async (id) => {
        try {
            const response = await axios.get(`https://eldenring.fanapis.com/api/weapons/${id}`);
            const weaponData = response.data.data[0];

            const formattedData = {
                success: true,
                count: 1,
                data: [weaponData]
            };

            setWeaponData(formattedData);
        } catch (error) {
            console.error('Error fetching weapon data:', error);
        }
    };

    const handleSelectChange = async (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value) {
            fetchWeaponData(event.target.value);
        }
    };

    return (
        <div>
            <label htmlFor="dropdownTwo">Select Weapon:</label>
            <select id="dropdownTwo" value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select Weapon</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {weaponData && (
                <pre>{JSON.stringify(weaponData, null, 2)}</pre>
            )}
        </div>
    );
};

export default DropdownTwo;