// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import RadioButton from '../components/RadioButton';
import AuthButton from '../components/AuthButton';
import styles from '../components/styles/AuthForm.module.css';

const LoginPage = () => {
  const [role, setRole] = useState('buyer');

  return (
    <div className={styles.authForm}>
      <Link to="/" className={styles.backArrow}>&larr;</Link>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>MERCADO</h1>
        <hr className={styles.horizontalLine} />
      </div>
      <h2>Sign in to continue</h2>

      <InputField label="Username" type="text" placeholder="Username" required />
      <InputField label="Password" type="password" placeholder="Password" required />

      <div className={styles.roleSelection}>
        <RadioButton label="Buyer" name="role" checked={role === 'buyer'} onChange={() => setRole('buyer')} />
        <RadioButton label="Seller" name="role" checked={role === 'seller'} onChange={() => setRole('seller')} />
      </div>

      <div className={styles.options}>
        <label>
          <input type="checkbox" /> Stay signed in
        </label>
        <a href="#forgot">Forgot your password?</a>
      </div>

      <AuthButton text="Sign in" styleType="primary" />

      <p className={styles.signUpPrompt}>Not a member? No Worries, Sign-Up to Mercado</p>

      <AuthButton text="Create an Account" styleType="primaryOutline" />

      <div className={styles.separator}>OR</div>

      <AuthButton text="Continue with Google" styleType="secondary" />
      <AuthButton text="Continue with Facebook" styleType="secondary" />
    </div>
  );
};

export default LoginPage;