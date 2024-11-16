import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProductSalesChart = ({ data = { labels: [], datasets: [] } }) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return <p>No data available for Product Sales Chart.</p>;
  }

  return (
    <div style={{ width: '600px', height: '500px', margin: '10px', backgroundColor: '#FFF9E3', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          devicePixelRatio: 2,
          plugins: {
            legend: { position: 'top', labels: { font: { size: 18, family: 'Arial', weight: 'bold', color: '#333' } } },
            title: { display: true, text: 'Product Sales', font: { size: 22, family: 'Arial', weight: 'bold', color: '#333' } },
            tooltip: { bodyFont: { size: 16, weight: 'bold' } },
          },
        }}
      />
    </div>
  );
};

export default ProductSalesChart;
