// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeatureBar from '../components/FeatureBar';
import Categories from '../components/Categories';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import styles from '../components/styles/HomePage.module.css';
import PromotionSection from '../components/PromotionSection';
import PS5Banner from '../components/PS5Banner';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Banner />
      <FeatureBar />
      <Categories />
      <PromotionSection />
      <Listings />
      <PS5Banner />
      <Footer />
    </div>
  );
};

export default HomePage;