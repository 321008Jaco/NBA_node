import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'
import axios from "axios";
import FetchRandomBoss from "./apiCall";
import './home.css';

const HomeChart = () => {
    const [weaponData, setWeaponData] = useState([]);

    useEffect(() => {
        axios.get('https://eldenring.fanapis.com/api/weapons')
            .then(response => {
                const data = response.data.data;
                const labels = data.map(weapon => weapon.name);
                const damage = data.map(weapon => weapon.attack.find(a => a.name === 'Phy').amount);

                setWeaponData({ labels, damage });
            })
            .catch(error => {
                console.error('Error fetching weapon data:', error);
            });
    }, []);

    return (
        <div className="chart-container">
            <h2>Weapons Damage Chart</h2>
            <Bar
                data={{
                    labels: weaponData.labels,
                    datasets: [
                        {
                            label: 'Damage',
                            data: weaponData.damage,
                            backgroundColor: '#368668',
                            borderColor: '#368668',
                            borderColor: 'black',
                            borderWidth: 1,
                        }
                    ]
                }}
                height={null}
                width={'100%'}
                options={{
                    maintainAspectRatio: false,
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