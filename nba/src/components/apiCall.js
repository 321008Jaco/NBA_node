import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://free-nba.p.rapidapi.com/players', {
                    headers: {
                        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                        'x-rapidapi-key': '20f38f33bamshbc6ed3334b9c5c5p142fe8jsn91eb4ef6645c',
                    }
                });
                setData(response.data);
                console.log('Fetched Data:', response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default FetchData;