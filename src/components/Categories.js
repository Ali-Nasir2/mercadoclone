// src/components/Categories.js
import React from 'react';
import styles from './styles/Categories.module.css';

function Categories() {
  const categories = ['Consoles', 'Headphones', 'Controllers', 'Accessories', 'Games'];

  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <div className={styles.categoryList}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <img src={`/assets/${category.toLowerCase()}.png`} alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;