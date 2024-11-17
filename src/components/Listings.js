// src/components/Listings.js
import React from 'react';
import styles from './styles/Listings.module.css';

function Listings() {
  const listings = [
    { title: 'PS4 Headset', price: '$199' },
    { title: 'PS5 Console', price: '$500' },
    { title: 'Xbox Subscription', price: '$12' },
    // Add more listings as needed
  ];

  return (
    <div className={styles.listings}>
      <h2>Top Listings</h2>
      <div className={styles.listingsGrid}>
        {listings.map((item, index) => (
          <div key={index} className={styles.listingItem}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;