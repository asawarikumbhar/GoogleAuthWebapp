// LoginPage.js

import React, { useState } from 'react';
import { googleSignIn, emailSignIn } from './firebase'; // Import the firebase functions

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        googleSignIn();
    };

    // Handle Email and Password Sign-In
    const handleEmailSignIn = (e) => {
        e.preventDefault();
        setError(""); // Reset error message before making the request
        emailSignIn(email, password)
            .then(() => {
                // Redirect to dashboard or other page after successful login
                window.location.href = "/dashboard"; // Example
            })
            .catch((err) => {
                setError(err.message); // Show error if login fails
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleEmailSignIn}>
                <div>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {error && <p className="error">{error}</p>} {/* Display error message */}

            <p>--Or continue with--</p>
            <button onClick={handleGoogleSignIn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20px" /> Sign in with Google
            </button>

            <p>New user <a href="/register">Register Here</a></p>
        </div>
    );
}

export default LoginPage;
