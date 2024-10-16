import React, { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignupForm.css';
import API_BASE_URL from './config'; // Adjust the path as necessary

const SignupForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [isRegistering, setIsRegistering] = useState(false);
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegistering) {
            // Registration logic
            try {
                const response = await fetch(`${backendUrl}/api/users/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: registerUsername,
                        email: registerEmail,
                        password: registerPassword,
                    }),
                });

                if (response.ok) {
                    setSuccess('Registration successful! You can now log in.');
                    setRegisterUsername('');
                    setRegisterEmail('');
                    setRegisterPassword('');
                    setError('');
                } else {
                    const data = await response.json();
                    setError(data.message || 'Registration failed.');
                }
            } catch (err) {
                setError('An error occurred. Please try again.');
            }
        } else {
            // Login logic
            try {
                const response = await fetch(`${backendUrl}/api/users/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: loginEmail,
                        password: loginPassword,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    // Store token in local storage or state if needed
                    localStorage.setItem('token', data.token); // Example of storing token
                    setSuccess('Login successful!');
                    setLoginEmail('');
                    setLoginPassword('');
                    setError('');
                    // Redirect to homepage after successful login
                    navigate('/'); // Change this to your homepage route
                } else {
                    const data = await response.json();
                    setError(data.message || 'Login failed.');
                }
            } catch (err) {
                setError('An error occurred. Please try again.');
            }
        }
    };

    const handleSwitchToLogin = () => {
        setIsRegistering(false);
        setError('');
        setSuccess('');
    };

    const handleSwitchToRegister = () => {
        setIsRegistering(true);
        setError('');
        setSuccess('');
    };

    return (
        <div className="signup-form-container">
            <div className="tab-buttons">
                <button className={!isRegistering ? 'active' : ''} onClick={handleSwitchToLogin}>Login</button>
                <button className={isRegistering ? 'active' : ''} onClick={handleSwitchToRegister}>Register</button>
            </div>
            <p>Sign in with:</p>
            <div className="social-icons">
                <FaFacebookF />
                <FaGoogle />
            </div>
            <p>or:</p>
            <form onSubmit={handleSubmit}>
                {isRegistering && (
                    <>
                        <input
                            type="text"
                            placeholder="Username"
                            value={registerUsername}
                            onChange={(e) => setRegisterUsername(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                    </>
                )}
                {!isRegistering && (
                    <>
                        <input
                            type="text"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <div className="options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Remember me
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                    </>
                )}
                <button type="submit" className="login-button">
                    {isRegistering ? 'Register' : 'Sign In'}
                </button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
            {!isRegistering && <p>Not a member? <a href="#" onClick={handleSwitchToRegister}>Register</a></p>}
        </div>
    );
};

export default SignupForm;
