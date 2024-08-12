import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { LocalCarWash, BikeScooter, Explore } from '@mui/icons-material';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartRenting = () => {
        navigate('/login');
    };

    return (
        <div className="landing-page">
            <header className="landing-header">
                <motion.div
                    className="landing-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="landing-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Your Ride Awaits
                    </motion.h1>
                    <motion.p
                        className="landing-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Discover the best vehicle rental experience tailored to your needs.
                    </motion.p>
                    <Button
                        variant="contained"
                        color="primary"
                        className="landing-button"
                        onClick={handleStartRenting}
                        component={motion.div}
                        whileHover={{ scale: 1.1, boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Start Renting
                    </Button>
                </motion.div>
                <div className="landing-icons">
                    <motion.div
                        className="icon-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <LocalCarWash fontSize="large" />
                        <p>Cars</p>
                    </motion.div>
                    <motion.div
                        className="icon-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <BikeScooter fontSize="large" />
                        <p>Bikes</p>
                    </motion.div>
                    <motion.div
                        className="icon-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Explore fontSize="large" />
                        <p>Explore</p>
                    </motion.div>
                </div>
            </header>
        </div>
    );
};

export default LandingPage;
