import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023 (in USD)',
        data: [3000, 2000, 4000, 5000, 7000, 6000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', 
      },
      title: {
        display: true,
        text: 'Sales per Month in 2023',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
