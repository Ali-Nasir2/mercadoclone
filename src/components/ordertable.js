import React from 'react';

const OrderTable = ({ orders }) => {
  return (
    <div className="table-container" style={{ backgroundColor: '#5F9EA0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontFamily: 'Adriana', color: '#000000' }}>Order Table</h3>
      <table className="order-table" style={{ width: '100%', borderCollapse: 'collapse', color: '#000000' }}>
        <thead>
          <tr style={{ backgroundColor: '##5F9EA0' }}>
            <th style={{ padding: '10px', color: '#000000', fontWeight: 'bold' }}>Order ID</th>
            <th style={{ padding: '10px', color: '#000000', fontWeight: 'bold' }}>Customer ID</th>
            <th style={{ padding: '10px', color: '#000000', fontWeight: 'bold' }}>Order Date</th>
            <th style={{ padding: '10px', color: '#000000', fontWeight: 'bold' }}>Total</th>
            <th style={{ padding: '10px', color: '#000000', fontWeight: 'bold' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderID} style={{ backgroundColor: '#5F9EA0' }}>
              <td style={{ padding: '10px' }}>{order.orderID}</td>
              <td style={{ padding: '10px' }}>{order.customerID}</td>
              <td style={{ padding: '10px' }}>{order.orderDate}</td>
              <td style={{ padding: '10px' }}>{order.total}</td>
              <td style={{ padding: '10px' }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
