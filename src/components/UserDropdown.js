// src/components/UserDropdown.js

import React from 'react';
import { Link } from 'react-router-dom';
import './UserDropdown.css';

const UserDropdown = ({ isLoggedIn, onLogout }) => {
    return (
        <div className="user-dropdown">
            {isLoggedIn ? (
                <>
                    <Link to="/profile" className="dropdown-link">Profile</Link>
                    <Link to="/track-order" className="dropdown-link">Track Order</Link>
                    <button className="dropdown-link" onClick={onLogout}>Logout</button>
                </>
            ) : (
                <Link to="/signup" className="dropdown-link">Signup / Login</Link>

            )}
        </div>
    );
};

export default UserDropdown;
