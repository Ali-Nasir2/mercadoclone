// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import RadioButton from '../components/RadioButton';
import AuthButton from '../components/AuthButton';
import styles from '../components/styles/AuthForm.module.css';

const SignupPage = () => {
  const [role, setRole] = useState('buyer');

  return (
    <div className={styles.authForm}>
      <Link to="/" className={styles.backArrow}>&larr;</Link>
      <Link to="/login" className={styles.loginButton}>Login</Link>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>MERCADO</h1>
        <hr className={styles.horizontalLine} />
      </div>
      <h2>Create your account</h2>
      <p>Registration is easy</p>

      <InputField label="Email address" type="email" placeholder="Email" required />
      <InputField label="Username" type="text" placeholder="Username" required />
      <InputField label="Password" type="password" placeholder="Password" required />

      <div className={styles.roleSelection}>
        <RadioButton label="Buyer" name="role" checked={role === 'buyer'} onChange={() => setRole('buyer')} />
        <RadioButton label="Seller" name="role" checked={role === 'seller'} onChange={() => setRole('seller')} />
      </div>

      <p className={styles.terms}>
        By clicking Register or Continue with Google, Facebook, or Apple, you agree to MERCADO's Terms of Use and Privacy Policy.
      </p>

      <AuthButton text="Register" styleType="primary" />

      <div className={styles.separator}>OR</div>

      <AuthButton text="Continue with Google" styleType="secondary" />
      <AuthButton text="Continue with Facebook" styleType="secondary" />
    </div>
  );
};

export default SignupPage;