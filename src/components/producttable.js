import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div className="table-container" style={{ backgroundColor: '#A8DADC', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontFamily: 'Arial', color: '#264653' }}>Product Table</h3>
      <table className="product-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#A8DADC' }}>
            <th style={{ color: '#000000', padding: '10px', fontWeight: 'bold' }}>Product Name</th>
            <th style={{ color: '#000000', padding: '10px', fontWeight: 'bold' }}>Category</th>
            <th style={{ color: '#000000', padding: '10px', fontWeight: 'bold' }}>Price</th>
            <th style={{ color: '#000000', padding: '10px', fontWeight: 'bold' }}>Stock</th>
            <th style={{ color: '#000000', padding: '10px', fontWeight: 'bold' }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name} style={{ backgroundColor: '#A8DADC' }}>
              <td style={{ padding: '10px' }}>{product.name}</td>
              <td style={{ padding: '10px' }}>{product.category}</td>
              <td style={{ padding: '10px' }}>{product.price}</td>
              <td style={{ padding: '10px' }}>{product.stock}</td>
              <td style={{ padding: '10px' }}>{product.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
