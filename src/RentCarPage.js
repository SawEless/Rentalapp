import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Button, Avatar, Chip } from '@mui/material';
import { AiFillCar } from 'react-icons/ai';
import { motion } from 'framer-motion';

const carData = [
    { id: 1, name: 'Luxury Sedan', available: true, price: 50, image: 'sedan.jpg' },
    { id: 2, name: 'Compact SUV', available: false, price: 40, image: 'suv.jpg' },
    { id: 3, name: 'Convertible', available: true, price: 70, image: 'convertible.jpg' },
];

const RentCarPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredCars = carData.filter(car => (filter === 'all' ? true : car.available));

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom>
                Available Cars for Rent
            </Typography>

            {/* Filters */}
            <Box sx={{ marginBottom: '20px' }}>
                <Chip
                    label="All Cars"
                    onClick={() => setFilter('all')}
                    color={filter === 'all' ? 'primary' : 'default'}
                    sx={{ marginRight: '10px' }}
                />
                <Chip
                    label="Available Only"
                    onClick={() => setFilter('available')}
                    color={filter === 'available' ? 'primary' : 'default'}
                />
            </Box>

            {/* Car List */}
            <Grid container spacing={4}>
                {filteredCars.map(car => (
                    <Grid item xs={12} md={6} lg={4} key={car.id}>
                        <Card
                            component={motion.div}
                            whileHover={{ scale: 1.05 }}
                            sx={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '12px', textAlign: 'center' }}
                        >
                            <Avatar
                                src={`/images/${car.image}`}
                                alt={car.name}
                                sx={{ width: 120, height: 120, margin: '20px auto' }}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {car.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {car.available ? 'Available' : 'Not Available'}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ marginTop: '10px' }}>
                                    ${car.price}/day
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RentCarPage;
