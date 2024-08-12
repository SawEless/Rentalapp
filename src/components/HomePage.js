import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to Your Ride
                </motion.h1>
                <motion.p
                    className="home-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Explore our range of vehicles and book your next ride.
                </motion.p>
                <div className="home-buttons">
                    <Button
                        variant="contained"
                        color="primary"
                        className="home-button"
                        component={motion.div}
                        whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Explore Vehicles
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        className="home-button"
                        component={motion.div}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Learn More
                    </Button>
                </div>
            </header>
        </div>
    );
};

export default HomePage;
