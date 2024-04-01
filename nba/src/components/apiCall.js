import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [lebronStats, setLebronStats] = useState(null);

    useEffect(() => {
        const fetchLebronStats = async () => {
            try {
                const response = await axios.get('https://free-nba.p.rapidapi.com/players/237', {
                    headers: {
                        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                        'x-rapidapi-key': '9911e0d0d6mshfc94ba00f56b6aep1a87b1jsn29c69eebfb95' // Replace with your RapidAPI key
                    }
                });
                setLebronStats(response.data);
                console.log('LeBron James Stats:', response.data);
            } catch (error) {
                console.error('Error fetching LeBron James stats:', error);
            }
        };

        fetchLebronStats();
    }, []);

    return (
        <div>
            <h2>LeBron James's Stats</h2>
            {lebronStats && (
                <div>
                    <p>Name: {lebronStats.first_name} {lebronStats.last_name}</p>
                    {/* Modify this line */}
                    <p>Team: {lebronStats.team?.full_name || 'N/A'}</p>
                    <p>Points per game: {lebronStats.pts}</p>
                    <p>Assists per game: {lebronStats.ast}</p>
                    <p>Rebounds per game: {lebronStats.reb}</p>
                    {/* Add more stats as needed */}
                </div>
            )}
        </div>
    );
};

export default FetchData;


