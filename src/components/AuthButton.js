// src/components/AuthButton.js
import React from 'react';
import styles from './styles/AuthButton.module.css';

const AuthButton = ({ text, onClick, styleType }) => {
  return (
    <button className={`${styles.authButton} ${styles[styleType]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default AuthButton;