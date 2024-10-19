import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import image from '../assets/Homepage/thought-catalog-23KdVfc395A-unsplash.jpg';
import menCategoryImage from '../assets/Homepage/men-category.jpg';
import womenCategoryImage from '../assets/Homepage/women-category.jpg';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="App-header">
                {/* New In Category */}
                <div className="category new-in">
                    <img src={image} alt="New In" className="full-width-image" />
                    <div className="ImageLinkText">
                        <div className="category-text">Check out our new fits</div>
                        <div className="category-header">New In</div>
                    </div>
                </div>

                <div className="category description">
                    <div className="ImageLinkText">
                    </div>
                </div>

                {/* Men & Women Category */}
                <div className="category two-grid">
                    <img src={menCategoryImage} alt="Men" className="half-width-image" />
                    <img src={womenCategoryImage} alt="Women" className="half-width-image" />
                    <div className="ImageLinkText">
                        <div className="category-text">Explore Men & Women</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HomePage;
