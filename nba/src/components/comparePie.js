import React from 'react';
import { Pie } from 'react-chartjs-2';

const ComparePie = ({ attackDifference }) => {
    if (!attackDifference || Object.keys(attackDifference).length === 0) {
      return <div>No data available for pie chart</div>;
    }
  
    const data = {
      labels: Object.keys(attackDifference),
      datasets: [
        {
          data: Object.values(attackDifference),
          backgroundColor: [
            'red',
            'blue',
            'green',
            // Add more colors as needed
          ],
        },
      ],
    };
  
    return (
      <div>
        <h3>Attack Difference (Pie Chart)</h3>
        <Pie data={data} />
      </div>
    );
  };
  
  export default ComparePie;