import React from 'react';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BookingConfirmationPage = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Booking Confirmation
            </Typography>
            
            <Paper elevation={3} sx={{ p: 3 }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h6" gutterBottom>
                        <FaCheckCircle color="green" /> Your booking has been confirmed!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Thank you for booking with us. Your reservation details are as follows:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Vehicle: XYZ Model<br />
                        Pickup Date: 20th August 2024<br />
                        Return Date: 25th August 2024<br />
                        Total Price: $200
                    </Typography>
                    <Button variant="contained" color="primary">
                        View Booking Details
                    </Button>
                </motion.div>
            </Paper>
        </Box>
    );
};

export default BookingConfirmationPage;
