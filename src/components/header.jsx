// src/components/Header/Header.js

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import BlackLogo from '../assets/Logo/kttle-black-without-bg.png';
import WhiteLogo from '../assets/Logo/kttle-white-without-bg.png';
import UserDropdown from '../components/UserDropdown';
import { toast } from 'react-toastify'; // Import toast


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSignup = () => {
        setSignupVisible(!isSignupVisible);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSignupVisible(false);
        }
    };

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false); // Update the login state
        toast.success('Logged out successfully!'); // Toast notification
        navigate('/'); // Redirect to the home page after logout
    };

    useEffect(() => {
        // Check if the user is logged in (e.g., check for the token in local storage)
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }

        window.addEventListener('scroll', handleScroll);
        if (isSignupVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSignupVisible]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-menu-icon" onClick={toggleMenu}>
                <FaBars className="icon" />
            </div>

            <div className="header-logo">
                <Link to="/" >
                    <h1 className="logo-text">Finesse<br />wears</h1> {/* Updated logo */}
                </Link>
            </div>

            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/new-in" className="nav-link">New In</Link>
                <Link to="/men" className="nav-link">Men</Link>
                <Link to="/women" className="nav-link">Women</Link>
                <Link to="/kids" className="nav-link">Kids</Link>
                <Link to="/accessories" className="nav-link">Accessories</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="header-icons">
                <FaSearch className="icon" title="Search" />
                <div className="user-icon" onClick={toggleSignup} ref={dropdownRef}>
                    <FaUser className="icon" title="User" />
                    {/* Show UserDropdown based on login status */}
                    {isSignupVisible && <UserDropdown isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
                </div>
                <FaShoppingCart className="icon" title="Cart" />
            </div>
        </header>
    );
};

export default Header;
