// src/components/Categories.js
import React from 'react';
import styles from './styles/Categories.module.css';

function Categories() {
  const categories = [
    {
      name: 'Consoles',
      image: '/images/xbox_pic.png'
    },
    {
      name: 'Headphones',
      image: '/images/headphones.png'
    },
    {
      name: 'Controllers',
      image: '/images/xbox_con.png'
    },
    {
      name: 'Accessories',
      image: '/images/accessories.png'
    },
    {
      name: 'Games',
      image: '/images/games.png'
    }
  ];

  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categoryList}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <div className={styles.categoryCircle}>
              <img 
                src={category.image}
                alt={category.name}
                className={styles.categoryImage}
              />
            </div>
            <p className={styles.categoryName}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;