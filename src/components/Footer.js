// Footer.js
import React from 'react';
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subscribeSection}>
        <h2 className={styles.subscribeTitle}>Subscribe to our newsletter</h2>
        <p className={styles.subscribeText}>
          WE PROVIDE YOU WITH EVERYTHING YOU NEED FOR THE WEEK OF TECH
        </p>
        <div className={styles.subscribeInputContainer}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.subscribeInput}
          />
          <button className={styles.subscribeButton}>SUBSCRIBE →</button>
        </div>
        <div className={styles.brandLogos}>
          <span>Google</span>
          <span>Amazon</span>
          <span>Philips</span>
          <span>Toshiba</span>
          <span>Samsung</span>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>CLICON</h3>
          <p>Customer Supports:</p>
          <p>XXX-XXX-XXX</p>
          <p>XYZ STREET XYZ XYZ XYZ</p>
          <p>info@mercado@gmail.com</p>
        </div>
        
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>TOP CATEGORY</h3>
          <p>Games</p>
          <p>Consoles</p>
          <p>Headphones</p>
          <p className={styles.highlighted}>— Accessories</p>
          <p>TV & Homes</p>
          <p className={styles.browseLink}>Browse All Product →</p>
        </div>
        
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>QUICK LINKS</h3>
          <p>Shop Product</p>
          <p>Shopping Cart</p>
          <p>About Us</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;