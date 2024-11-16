// src/components/RadioButton.js
import React from 'react';
import styles from './styles/RadioButton.module.css';

const RadioButton = ({ label, name, checked, onChange }) => {
  return (
    <label className={styles.RadioButton}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;