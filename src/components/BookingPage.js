import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, TextField, Typography } from '@mui/material';
import './BookingPage.css';

const BookingPage = () => {
    const [date, setDate] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking logic
    };

    return (
        <div className="booking-page">
            <Typography variant="h4" gutterBottom>Book Your Ride</Typography>
            <form onSubmit={handleSubmit}>
                <motion.div
                    className="booking-form"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <TextField
                        label="Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <TextField
                        label="Vehicle Type"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setVehicleType(e.target.value)}
                    />
                    <TextField
                        label="Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="booking-button"
                    >
                        Book Now
                    </Button>
                </motion.div>
            </form>
        </div>
    );
};

export default BookingPage;
