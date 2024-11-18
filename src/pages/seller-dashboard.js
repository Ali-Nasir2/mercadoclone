import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/summarycard';
import ProductSalesChart from '../components/productsales';
import BestSellersChart from '../components/bestseller';
import ProductTable from '../components/producttable';
import OrderTable from '../components/ordertable';
import '../components/styles/seller.css';
import '../components/styles/dashboard.css';

const Dashboard = () => {
  const [summary, setSummary] = useState({
    totalIncome: 'PKR 0',
    displayedProducts: 0,
    ordersPending: 0,
    ordersCompleted: 0,
  });

  const [productSalesData, setProductSalesData] = useState({ labels: [], datasets: [] });
  const [bestSellersData, setBestSellersData] = useState({ labels: [], datasets: [] });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSummary = {
          totalIncome: 'PKR 74,540',
          displayedProducts: 13,
          ordersPending: 15,
          ordersCompleted: 3,
        };
        const fetchedProductSales = [
          { name: 'Product A', value: 614 },
          { name: 'Product B', value: 901 },
          { name: 'Product C', value: 647 },
          { name: 'Product D', value: 395 },
        ];

        const fetchedBestSellers = [
          { name: 'Product A', Sales: 50 },
          { name: 'Product B', Sales: 35 },
          { name: 'Product C', Sales: 20 },
          { name: 'Product D', Sales: 15 },
        ];

        const fetchedProducts = [
          { name: 'Wireless Headphones', category: 'Electronics', price: 7500, stock: 21, createdAt: '2023-08-15' },
          { name: 'Running Shoes', category: 'Sports', price: 5800, stock: 8, createdAt: '2023-08-16' },
          { name: 'Gaming Mouse', category: 'Electronics', price: 3900, stock: 11, createdAt: '2023-08-17' },
          { name: 'Smartwatch', category: 'Electronics', price: 6000, stock: 5, createdAt: '2023-08-18' },
        ];

        const fetchedOrders = [
          { orderID: 'ORD-01', customerID: 'CUS-01', orderDate: '2023-08-15', total: 7500, status: 'Pending' },
          { orderID: 'ORD-02', customerID: 'CUS-06', orderDate: '2023-08-16', total: 5800, status: 'Pending' },
          { orderID: 'ORD-03', customerID: 'CUS-07', orderDate: '2023-08-17', total: 1200, status: 'Shipped' },
          { orderID: 'ORD-04', customerID: 'CUS-04', orderDate: '2023-08-18', total: 6420, status: 'Shipped' },
        ];

        const formatSalesData = (sales) => ({
          labels: sales.map(item => item.name),
          datasets: [
            {
              label: 'Sales',
              data: sales.map(item => item.value),
              backgroundColor: [
                '#E63946',
                '#457B9D',
                '#F4A261',
                '#2A9D8F',
              ],
              borderColor: [
                '#E63946',
                '#457B9D',
                '#F4A261',
                '#2A9D8F',
              ],
              borderWidth: 1,
            },
          ],
        });

        const formatBestSellersData = (sellers) => ({
          labels: sellers.map(item => item.name),
          datasets: [
            {
              label: 'Sales',
              data: sellers.map(item => item.Sales),
              backgroundColor: [
                '#E63946',
                '#457B9D',
                '#F4A261',
                '#2A9D8F',
              ],
              borderColor: [
                '#E63946',
                '#457B9D',
                '#F4A261',
                '#2A9D8F',
              ],
              borderWidth: 1,
            },
          ],
        });

        setSummary(fetchedSummary);
        setProductSalesData(formatSalesData(fetchedProductSales));
        setBestSellersData(formatBestSellersData(fetchedBestSellers));
        setProducts(fetchedProducts);
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard" style={{ backgroundColor: '#FFF9E3', padding: '20px' }}>
      <header className="dashboard-header" style={{ backgroundColor: '#FFF9E3', color: '#264653', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ fontFamily: 'Italiana', color: '#264653',fontSize: '40px' }}>MERCADO</h1>
        <h2 style={{ fontFamily: 'Adriana', color: '#264653' }}>WELCOME BACK USER</h2>
        <button className="manage-products-btn" style={{ backgroundColor: '#A8DADC', color: '#264653', borderRadius: '8px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Manage Products</button>
      </header>

      <div className="summary-cards" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      <SummaryCard title="Total Income" value={summary.totalIncome} style={{ backgroundColor: '#D4EAC7', color: '#264653' }} />
        <SummaryCard title="Displayed Products" value={summary.displayedProducts} style={{ backgroundColor: '#D4EAC7', color: '#264653' }} />
        <SummaryCard title="Orders Pending" value={summary.ordersPending} style={{ backgroundColor: '#D4EAC7', color: '#264653' }} />
        <SummaryCard title="Orders Completed" value={summary.ordersCompleted} style={{ backgroundColor: '#D4EAC7', color: '#264653' }} />
      </div>

      <div className="charts" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'nowrap' }}>
        <ProductSalesChart data={productSalesData} />
        <BestSellersChart data={bestSellersData} />
      </div>

      <div className="tables" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', marginTop: '20px' }}>
        <ProductTable products={products} />
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
