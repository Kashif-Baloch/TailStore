"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [3434, 2343, 2344, 6775, 3323, 8834, 2342],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Line options={options} data={data} />
    </div>
  );
};

// import React, { useEffect, useState } from 'react'
// // import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
// import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
// import { Bar } from 'react-chartjs-2'

// ChartJs.register(
//     CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
// )

// const BarChart = () => {
//     const [chartData, setChartData] = useState({
//         datasets: [],
//     })
//     const [chartOptions, setChartOptions] = useState({})

//     useEffect(() => {
//         setChartData({
//             labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//             datasets: [{
//                 label: 'Sales $',
//                 data: [12122, 12122, 12122, 12122, 12122, 12122],
//                 borderColor: 'rgb(53, 162, 235)',
//                 backgroundColor: 'rgb(53, 162, 235, 0.4)',
//             }]
//         })
//         setChartOptions({
//             plugins: {
//                 legend: {
//                     position: 'top'
//                 },
//                 title: {
//                     display: true,
//                     text: 'Daily Revenue'
//                 },
//             },
//             maintainAspectRatio: false,
//             responsive: true
//         })
//     }, [])

//     return (
//         <div>
//             <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
//                 <Bar data={chartData} options={chartOptions} />
//             </div>
//         </div>
//     )
// }

export default BarChart;
