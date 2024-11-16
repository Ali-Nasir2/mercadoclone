import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <button onClick={() => alert('Sign Up clicked!')}>Sign Up</button>
        <button onClick={() => alert('Login clicked!')}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;
