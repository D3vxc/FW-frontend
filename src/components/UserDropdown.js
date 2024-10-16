// src/components/UserDropdown.js

import React from 'react';
import { Link } from 'react-router-dom';
import './UserDropdown.css';

const UserDropdown = () => {
    return (
        <div className="user-dropdown">
            <Link to="/signup" className="dropdown-link">signup / login</Link>
            <Link to="/track-order" className="dropdown-link">Track Order</Link>
        </div>
    );
};

export default UserDropdown;
