// PS5Banner.js
import React from "react";
import styles from "./styles/PS5Banner.module.css";

const PS5Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.contentSection}>
        <span className={styles.saveTag}>SAVE UP TO $100.00</span>
        <h1 className={styles.title}>PS5 BUNDLE</h1>
        <p className={styles.description}>
          1TB SPACE WITH 
        </p>
        <p className={styles.description2}>
          THE TRENDIEST GAME IN TOWN
        </p>
        <button className={styles.shopButton}>SHOP NOW →
        </button>
      </div>
      <div className={styles.imageSection}>
        <img 
          src="/images/spider_1.png" 
          alt="PS5 Bundle" 
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
};

export default PS5Banner;