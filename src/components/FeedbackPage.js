// src/components/FeedbackPage.js
import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        // Handle feedback submission
        console.log('Feedback submitted:', feedback);
    };

    return (
        <Container>
            <motion.div
                className="feedback-page"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography variant="h2" gutterBottom>
                    Feedback
                </Typography>
                <TextField
                    label="Your Feedback"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    component={motion.div}
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit Feedback
                </Button>
            </motion.div>
        </Container>
    );
};

export default FeedbackPage;
