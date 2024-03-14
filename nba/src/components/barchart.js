import React from "react";
import Chart from "chart.js/auto";
import {Bar} from 'react-chartjs-2'

const HomeChart = () => {
    return (
    
    <div>
        <Bar
            data={{
                labels: ['2014', '2015', '2016' , '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: 'Matches Won',
                        data: ['24', '24', '19' ,'23', '32', '32', '26', '27', '36', '36'],
                        backgroundColor: 'LightBlue',
                        borderColor: 'black',
                        borderWidth: 1,
                    }
                ]
            }}
            height={400}
            width={500}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            }}
        />
        </div>
    );
};

export default HomeChart;