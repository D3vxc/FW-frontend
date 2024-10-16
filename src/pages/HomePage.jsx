import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import image from '../assets/Homepage/thought-catalog-23KdVfc395A-unsplash.jpg'; // Correctly import the image

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="App-header">
                <img src={image} alt="Description" className='fullscreen-image' /> {/* Use the imported image here */}
            </header>
        </div>
    );
};

export default HomePage;
