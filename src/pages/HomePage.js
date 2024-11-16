// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/styles/HomePage.module.css';
import SignUpButton from '../components/SignUpButton';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Home Page</h1>
      <div className={styles.buttonContainer}>
        <Link to="/signup">
          <SignUpButton />
        </Link>
        <Link to="/login">
          <LoginButton />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;