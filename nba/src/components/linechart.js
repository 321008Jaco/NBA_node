// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";

// const LineChart = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await axios.get(
//           "https://epic-store-games.p.rapidapi.com/comingSoon",
//           {
//             params: {
//               searchWords: 'Assassin',
//               locale: 'us',
//               country: 'us'
//             },
//             headers: {
//               'X-RapidAPI-Key': '20f38f33bamshbc6ed3334b9c5c5p142fe8jsn91eb4ef6645c',
//               'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
//             }
//           }
//         );
//         const gamesData = response.data;
//         const filteredGames = filterGamesByReleaseMonth(gamesData, 4); // May is represented by index 4
//         setGames(filteredGames.slice(0, 10)); // Display the first 10 games
//       } catch (error) {
//         console.error('Error fetching games:', error);
//       }
//     };

//     fetchGames();
//   }, []);

//   const filterGamesByReleaseMonth = (games, month) => {
//     return games.filter(game => {
//       const releaseDate = new Date(game.releaseDate);
//       return releaseDate.getMonth() === month;
//     });
//   };

//   const gameNames = games.map(game => game.title);
//   const releaseDates = games.map(game => game.releaseDate);

//   const data = {
//     labels: gameNames,
//     datasets: [
//       {
//         label: 'Release Date',
//         data: releaseDates,
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//       }
//     ]
//   };

//   return (
//     <div>
//       <h2>Upcoming Games in May</h2>
//       <Line data={data} />
//     </div>
//   );
// };

// export default LineChart;