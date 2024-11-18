// src/components/FeatureBar.js
import React from "react";
import styles from './styles/FeatureBar.module.css';

const FeatureBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.feature}>
        <i className="fas fa-box"></i>
        <div>
          <h4>EASIEST CHECKOUT</h4>
          <p>The EASIEST there is</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.feature}>
        <i className="fas fa-trophy"></i>
        <div>
          <h4>24 HOURS RETURN</h4>
          <p>100% money-back guarantee</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.feature}>
        <i className="fas fa-credit-card"></i>
        <div>
          <h4>SECURE PAYMENT</h4>
          <p>Your money is safe</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.feature}>
        <i className="fas fa-shipping-fast"></i>
        <div>
          <h4>FAST DELIVERY</h4>
          <p>Under 48 hours</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;