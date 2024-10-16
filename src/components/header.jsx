// src/components/Header/Header.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import BlackLogo from '../assets/Logo/kttle-black-without-bg.png';
import WhiteLogo from '../assets/Logo/kttle-white-without-bg.png'; // Assuming you have a white logo
import UserDropdown from '../components/UserDropdown';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSignup = () => {
        setSignupVisible(!isSignupVisible);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSignupVisible(false);
        }
    };

    useEffect(() => {
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
                    {isSignupVisible && <UserDropdown />} {/* Display dropdown when visible */}
                </div>
                <FaShoppingCart className="icon" title="Cart" />
            </div>
        </header>
    );
};

export default Header;
