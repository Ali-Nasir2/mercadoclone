// src/components/PromotionSection.js
import React from "react";
import styles from './styles/PromotionSection.module.css';

const PromotionSection = () => {
  const products = [
    "/images/prod1.jpg",
    "/images/prod2.jpg",
    "/images/prod3.jpg",
    "/images/prod4.jpg",
    "/images/prod5.jpg",
    "/images/prod6.jpg",
    "/images/prod7.jpg",
    "/images/prod8.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <p className={styles.category}>COMPUTER & ACCESSORIES</p>
          <h1 className={styles.discount}>32% Discount</h1>
          <p className={styles.description}>For all electronics products</p>
          <p className={styles.offerEnds}>
            Offers ends in: <span className={styles.highlight}>End Of Year</span>
          </p>
          <button className={styles.shopButton}>
            SHOP NOW <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <img
            key={index}
            src={product}
            alt={`Product ${index + 1}`}
            className={styles.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionSection;