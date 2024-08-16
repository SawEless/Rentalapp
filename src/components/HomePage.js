import React from 'react';
import { Box, Grid, Typography, Avatar, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { AiFillCar, AiOutlineTransaction, AiOutlineStar } from 'react-icons/ai';
import { FaMotorcycle, FaBicycle, FaRegCalendarAlt, FaUserCircle } from 'react-icons/fa';
import { MdLocationOn, MdPayment, MdSupportAgent } from 'react-icons/md';
import { GiScooter } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';  // Correct import for useNavigate

const HomePage = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    // Function to handle navigation
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
            {/* Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 20px',
                    borderBottom: '1px solid #ddd',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    Welcome, User!
                </Typography>
                <Avatar sx={{ bgcolor: '#3f51b5' }}>
                    <FaUserCircle size={28} />
                </Avatar>
            </Box>

            {/* Main Features */}
            <Grid container spacing={4} sx={{ marginTop: '20px' }}>
                {[
                    { icon: <AiFillCar size={64} />, title: 'Rent a Car', description: 'Browse and rent from a wide range of cars.', path: '/rent-car' },
                    { icon: <FaMotorcycle size={64} />, title: 'Rent a Bike', description: 'Choose the perfect bike for your trip.', path: '/rent-bike' },
                    { icon: <GiScooter size={64} />, title: 'Rent a Scooter', description: 'Easy and fun scooter rentals for city travel.', path: '/rent-scooter' },
                    { icon: <FaBicycle size={64} />, title: 'Rent a Cycle', description: 'Pedal around the city with our cycles.', path: '/rent-cycle' },
                ].map((feature, index) => (
                    <Grid item xs={12} md={6} lg={3} key={index}>
                        <Card
                            component={motion.div}
                            whileHover={{ scale: 1.05 }}
                            sx={{ textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '12px' }}
                        >
                            {feature.icon}
                            <CardContent>
                                <Typography variant="h6">{feature.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {feature.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginTop: '10px' }}
                                    onClick={() => handleNavigate(feature.path)}  // Navigate on click
                                >
                                    Rent Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Most Rented Vehicles */}
            <Box marginTop={8}>
                <Typography variant="h4" gutterBottom>
                    Most Rented Vehicles
                </Typography>
                <Grid container spacing={4}>
                    {[
                        { icon: <AiFillCar size={64} />, title: 'Luxury Sedan', description: 'Our most popular luxury sedan, perfect for long drives.', path: '/rent-car' },
                        { icon: <FaMotorcycle size={64} />, title: 'Sport Bike', description: 'The favorite choice for adventure enthusiasts.', path: '/rent-bike' },
                        { icon: <GiScooter size={64} />, title: 'Electric Scooter', description: 'Convenient and eco-friendly for short trips.', path: '/rent-scooter' },
                    ].map((vehicle, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                sx={{ textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '12px' }}
                            >
                                {vehicle.icon}
                                <CardContent>
                                    <Typography variant="h6">{vehicle.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {vehicle.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginTop: '10px' }}
                                        onClick={() => handleNavigate(vehicle.path)}  // Navigate on click
                                    >
                                        Rent Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Additional Features */}
            <Box marginTop={8}>
                <Typography variant="h4" gutterBottom>
                    Explore More Features
                </Typography>
                <Grid container spacing={4}>
                    {[
                        { icon: <AiOutlineTransaction size={64} />, title: 'Transaction History', description: 'Review your payment and rental history.', path: '/transaction-history' },
                        { icon: <MdPayment size={64} />, title: 'Payment Options', description: 'Explore various payment methods for convenience.', path: '/payment-options' },
                        { icon: <MdSupportAgent size={64} />, title: 'Customer Support', description: 'Get help and support for any issues or questions.', path: '/customer-support' },
                    ].map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                sx={{ textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '12px' }}
                            >
                                {feature.icon}
                                <CardContent>
                                    <Typography variant="h6">{feature.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {feature.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginTop: '10px' }}
                                        onClick={() => handleNavigate(feature.path)}  // Navigate on click
                                    >
                                        {feature.title.includes('History') ? 'View History' : 'Learn More'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default HomePage;
