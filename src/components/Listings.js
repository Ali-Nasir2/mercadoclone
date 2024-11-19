// src/components/TopListings.js
import React from "react";
import styles from './styles/Listings.module.css';

const Listings = () => {
  const categories = [
    {
      title: "FLASH SALE TODAY",
      items: [
        { name: "PS5 HEADSET", price: "$1,500", image: "/images/headset.jpg" },
        { name: "Last Of Us", price: "$1,500", image: "/images/lastofus.jpg" },
        { name: "GAMING KEYBOARD", price: "$1,500", image: "/images/accessories.png" },
      ],
    },
    {
      title: "BEST SELLERS",
      items: [
        { name: "PS5 Console", price: "$1,500", image: "/images/ps5console.jpg" },
        { name: "Headphone", price: "$1,500", image: "/images/headphones.png" },
        { name: "FIFA 24", price: "$1,500", image: "/images/fifa24.jpg" },
      ],
    },
    {
      title: "TOP RATED",
      items: [
        { name: "Controllers", price: "$1,500", image: "/images/xbox_con.png" },
        { name: "XBOX 1", price: "$1,500", image: "/images/xbox_pic.png" },
        { name: "FIFA 24", price: "$1,500", image: "/images/fifa24.jpg" },
      ],
    },
    {
      title: "NEW ARRIVAL",
      items: [
        { name: "PS5 Console Set", price: "$1,500", image: "/images/ps5console.jpg" },
        { name: "PS4 Console Set", price: "$1,500", image: "/images/ps4_con.png" },
        { name: "Controllers", price: "$1,500", image: "/images/xbox_con.png" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TOP LISTINGS</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.itemsGrid}>
              {category.items.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;  