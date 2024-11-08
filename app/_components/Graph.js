// lib: chart.js

"use client"
import { chartData } from '@/public/chartData';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import DisabledButton from './DisabledButton';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.raw}%`,
      },
    },
  },
  scales: {
    x: {
      display: true,
      beginAtZero: false,
      ticks: {
        color: '#9ca3af',
      },
      grid: {
        display: false,
      },
      position: 'bottom',
    },
    y: {
      beginAtZero: false,
      min: 20,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: (value) => `${value}%`,
        color: '#9ca3af',
        padding: 30,
      },
      grid: {
        display: false,
      },

    },

  },
};


export default function Graph() {

  return (
    <div className='bg-white dark:bg-SecDarkBg transition-colors duration-100 rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Sales Details</h2>
        <DisabledButton />
      </div>
      <div className='h-72 w-full'>
        <Line options={options} data={chartData} />
      </div>
    </div>

  )
}