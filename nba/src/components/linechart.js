import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function Timeline() {
  const [data, setData] = useState(null);

    const options = {
      method: 'GET',
      url: 'https://epic-store-games.p.rapidapi.com/comingSoon',
      params: {
        searchWords: 'elden',
        locale: 'us',
        country: 'us'
      },
      headers: {
        'X-RapidAPI-Key': '20f38f33bamshbc6ed3334b9c5c5p142fe8jsn91eb4ef6645c',
        'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
      }
    };

    useEffect(() => {
      axios(options)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
        });
    }, []);

    if (!data) {
      return
    }

    const releaseDates = {
      releaseDate: data[0].releaseDate,
      pcReleaseDate: data[0].pcReleaseDate,
      viewableDate: data[0].viewableDate
    };

    function prepareDatesForTimeline(dates) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
      const parsedDates = {};
    
      for (const [key, value] of Object.entries(dates)) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
    
        parsedDates[key] = { year, month, day };
      }
    
      return parsedDates;
    }
    
    const timelineData = prepareDatesForTimeline(releaseDates);
    
    console.log(timelineData);

    const labels = [timelineData.releaseDate.month, timelineData.pcReleaseDate.month, timelineData.viewableDate.month];

    const tableData = {
      labels,
      datasets: [
        {
          label: 'Game 1',
          data: [timelineData.releaseDate.year, timelineData.pcReleaseDate.year, timelineData.viewableDate.year],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    return (
      <div className='fullpage'>
        <Line data={tableData} />;
      </div>
    );
}

export default Timeline;