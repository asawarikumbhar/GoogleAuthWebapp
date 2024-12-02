import React, { useState } from 'react';
import { googleSignIn, emailSignIn } from './firebase'; // Import the functions from firebase.js
import './App.css'; // Import the CSS for styling

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null); // Track signed-in user

  // Handle email login
  const handleEmailLogin = async () => {
    try {
      await emailSignIn(email, password);
      setUser(email); // Update the user state
    } catch (err) {
      setError('Error logging in with email and password');
      console.error('Email login error:', err.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      setUser('Google User'); // Update user state after successful Google login
    } catch (err) {
      setError('Error logging in with Google');
      console.error('Google login error:', err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p>{error}</p>}
      {user && (
        <div className="logged-in">
          <p>Welcome, {user}!</p>
          <span onClick={() => setUser(null)}>Logout</span> {/* Logout option */}
        </div>
      )}

      {/* Email login form */}
      {!user && (
        <>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleEmailLogin}>Submit</button>
          <span>--Or continue with--</span>
          <button onClick={handleGoogleLogin} className="google-signin-btn">
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
};

export default App;
