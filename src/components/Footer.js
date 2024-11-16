// src/components/Footer.js
import React from 'react';
import styles from './styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h3>Subscribe to our newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className={styles.footerLinks}>
        <p>&copy; 2024 CLIQON</p>
        <div className={styles.quickLinks}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;