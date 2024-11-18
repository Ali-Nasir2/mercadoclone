// Banner.js
import React from 'react';
import styles from './styles/Banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.largeBox}>
                <img 
                    src="/images/xbox_pic.png"
                    alt="Xbox Console" 
                    className={styles.bannerImage}
                />
                <h2 className={styles.largeBoxTitle}>Xbox Consoles</h2>
                <p className={styles.largeBoxText}>Saving just became a lot more easier!!</p>
                <p className={styles.largeBoxText2}>Buy consoles on 40% off!</p>
                <button className={styles.shopNowButton0}>Shop Now →</button>
            </div>
            <div className={styles.smallBoxContainer}>
                <div className={styles.smallBox}>
                    <img 
                        src="/images/spider_1.png" 
                        alt="Spiderman Bundle" 
                        className={styles.smallBoxImage1}
                    />
                    <h2>Spider-Man Bundle</h2>
                    <p>Starting from $519.99 USD</p>
                    <button className={styles.shopNowButton1}>Shop Now →</button>
                </div>
                <div className={styles.smallBox}>
                    <img 
                        src="/images/xbox_con.png" 
                        alt="Xbox Controller" 
                        className={styles.smallBoxImage2}
                    />
                    <h2>Buy modified controllers</h2>
                    <p>Starting from $79 USD</p>
                    <button className={styles.shopNowButton2}>Shop Now →</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;