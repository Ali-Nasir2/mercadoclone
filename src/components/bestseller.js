import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BestSellersChart = ({ data = { labels: [], datasets: [] } }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return <p>No data available for Best Sellers Chart.</p>;
  }

  return (
    <div style={{ width: '600px', height: '500px', margin: '10px', backgroundColor: '#FFF9E3', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          devicePixelRatio: 2,
          plugins: {
            legend: { position: 'top', labels: { font: { size: 18, family: 'Arial', weight: 'bold', color: '#333' } } },
            title: { display: true, text: 'Your Top 6 Best Sellers', font: { size: 22, family: 'Arial', weight: 'bold', color: '#333' } },
            tooltip: { callbacks: { label: (context) => `${context.raw} units` }, bodyFont: { size: 16, weight: 'bold' } },
            datalabels: {
              anchor: 'end',
              align: 'top',
              color: '#333',
              font: { size: 16, family: 'Arial', weight: 'bold' },
              formatter: (value) => `${value} units`,
            },
          },
          scales: {
            x: {
              ticks: { color: '#333', font: { size: 16, family: 'Arial', weight: 'bold' } },
              grid: { color: 'rgba(200, 200, 200, 0.2)' },
            },
            y: {
              ticks: { color: '#333', font: { size: 16, family: 'Arial', weight: 'bold' }, callback: (value) => `${value}k` },
              grid: { color: 'rgba(200, 200, 200, 0.2)' },
            },
          },
        }}
      />
    </div>
  );
};

export default BestSellersChart;