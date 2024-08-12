// src/components/AboutUsPage.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <Container>
            <motion.div
                className="about-us"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant="h2" gutterBottom>
                    About Us
                </Typography>
                <Paper className="about-content" elevation={3}>
                    <Typography variant="h5">
                        Welcome to our vehicle rental service. We offer a wide range of vehicles to suit your needs.
                        Our goal is to provide an exceptional rental experience with outstanding customer service.
                    </Typography>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default AboutUsPage;
