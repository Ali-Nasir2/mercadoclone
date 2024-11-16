// src/components/InputField.js
import React from 'react';
import styles from './styles/InputField.module.css';

const InputField = ({ label, type, placeholder, required }) => {
  return (
    <div className={styles.inputField}>
      <label>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
};

export default InputField;