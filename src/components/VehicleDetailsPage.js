import React from 'react';
import { Box, Typography, Paper, Button, Grid, IconButton } from '@mui/material';
import { FaCar, FaEdit, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const VehicleDetailsPage = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Vehicle Details
            </Typography>
            
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <motion.img
                            src="https://via.placeholder.com/500"
                            alt="Vehicle"
                            style={{ width: '100%', borderRadius: '8px' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Vehicle Name
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <FaCar /> Type: SUV
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Price: $20,000
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Description: This is a great vehicle with all the latest features.
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                Book Now
                            </Button>
                            <Button variant="outlined" color="warning" sx={{ mr: 2 }}>
                                <FaEdit /> Edit
                            </Button>
                            <Button variant="outlined" color="error">
                                <FaTrashAlt /> Remove
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default VehicleDetailsPage;
