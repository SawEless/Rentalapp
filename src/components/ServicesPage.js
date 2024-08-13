import React from 'react';
import { FaCar, FaBicycle, FaMotorcycle } from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                <div className="service-card">
                    <FaCar className="service-icon car-icon" />
                    <h2>Car Rental</h2>
                    <p>Rent a car of your choice for hours, days, or weeks with flexible options.</p>
                </div>
                <div className="service-card">
                    <FaBicycle className="service-icon bike-icon" />
                    <h2>Bicycle Rental</h2>
                    <p>Choose from a variety of bicycles for daily commutes or leisurely rides.</p>
                </div>
                <div className="service-card">
                    <FaMotorcycle className="service-icon motorcycle-icon" />
                    <h2>Motorcycle Rental</h2>
                    <p>Rent a motorcycle for a quick trip or a long journey with our competitive rates.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ServicesPage;
