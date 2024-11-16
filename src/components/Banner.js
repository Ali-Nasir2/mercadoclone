// src/components/Banner.js
import React from 'react';
import styles from './styles/Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.largeBox}>
        <h2>Xbox Consoles</h2>
        <p>Starting just $401 with the newest XBox Ray edition!</p>
        <button className={styles.shopNowButton}>Shop Now</button>
      </div>
      <div className={styles.smallBoxContainer}>
        <div className={styles.smallBox}>
          <h2>Spider-Man Bundle</h2>
          <p>$520</p>
          <button className={styles.shopNowButton}>Shop Now</button>
        </div>
        <div className={styles.smallBox}>
          <h2>Modified Controllers</h2>
          <p>$100</p>
          <button className={styles.shopNowButton}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;