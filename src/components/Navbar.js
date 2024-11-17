// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MERCADO</div>
      <input type="text" placeholder="Search" className={styles.searchBar} />
      <div className={styles.navButtons}>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;