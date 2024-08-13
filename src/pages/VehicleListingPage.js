import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const vehicles = [
    // Mock data for vehicles
    { id: 1, name: 'Sedan', image: 'https://example.com/sedan.jpg', price: '$50/day' },
    { id: 2, name: 'SUV', image: 'https://example.com/suv.jpg', price: '$70/day' },
    // Add more vehicles as needed
];

const VehicleListingPage = () => {
    return (
        <Box padding={4}>
            <Typography variant="h4" gutterBottom>
                Available Vehicles
            </Typography>
            <Grid container spacing={3}>
                {vehicles.map(vehicle => (
                    <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={vehicle.image}
                                    alt={vehicle.name}
                                />
                                <CardContent>
                                    <Typography variant="h6">{vehicle.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {vehicle.price}
                                    </Typography>
                                    <Link to={`/vehicle/${vehicle.id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" fullWidth>
                                            View Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default VehicleListingPage;
