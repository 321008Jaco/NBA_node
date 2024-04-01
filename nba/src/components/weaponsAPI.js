import React from 'react';
import FetchWeaponById from '../pages/FetchWeaponById'; // Adjust the path as per your project structure

const WeaponDetailsPage = () => {
    const weaponId = '17f695c42f0l0i1ohb4cao0qxackpu'; // Example weapon ID

    return (
        <div>
            <h1>Weapon Details</h1>
            <FetchWeaponById weaponId={weaponId} />
        </div>
    );
};

export default WeaponDetailsPage;
