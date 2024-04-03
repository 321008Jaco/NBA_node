import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import axios from "axios";
import FetchRandomBoss from "./apiCall";
import './home.css';

const HomeChart = () => {
    const [weaponData, setWeaponData] = useState([]);

    useEffect(() => {
        // Fetch weapon data from the API
        axios.get('https://eldenring.fanapis.com/api/weapons')
            .then(response => {
                const data = response.data.data;
                // Extracting weapon names and damage amounts
                const labels = data.map(weapon => weapon.name);
                const damage = data.map(weapon => weapon.attack.find(a => a.name === 'Phy').amount);

                // Updating state with formatted data
                setWeaponData({ labels, damage });
            })
            .catch(error => {
                console.error('Error fetching weapon data:', error);
            });
    }, []);

    return (
        <div className="chart-container"> {/* Add a class to the container */}
            <h2>Weapons Damage Chart</h2>
            <Bar
                data={{
                    labels: weaponData.labels,
                    datasets: [
                        {
                            label: 'Damage',
                            data: weaponData.damage,
                            backgroundColor: 'Red',
                            borderColor: 'black',
                            borderWidth: 1,
                        }
                    ]
                }}
                height={null} // Set height to null to enable responsive resizing
                width={'100%'} // Set width to 100% to fill the container
                options={{
                    maintainAspectRatio: false, // Disable aspect ratio to fill the container
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default HomeChart;