import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const BookingPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [additionalOptions, setAdditionalOptions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your booking logic here
        console.log('Booking details:', { startDate, endDate, additionalOptions });
    };

    return (
        <Box padding={4}>
            <Typography variant="h4" gutterBottom>
                Book Your Vehicle
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Start Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="End Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Additional Options"
                        value={additionalOptions}
                        onChange={(e) => setAdditionalOptions(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Confirm Booking
                    </Button>
                </form>
            </motion.div>
        </Box>
    );
};

export default BookingPage;
