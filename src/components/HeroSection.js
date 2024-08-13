import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>Explore the World with Us</h1>
            <p>Book your next ride today!</p>
            <div className="hero-btns">
                <button className="btn btn--primary btn--large">
                    Get Started
                </button>
                <button className="btn btn--outline btn--large">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
