import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBicycle, FaMotorcycle, FaCar, FaTruckPickup, FaGlobe, FaWallet, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const features = [
    {
        icon: <FaBicycle size={30} />,
        title: "Rent Cycles",
        description: "Affordable and eco-friendly cycles available for rent.",
    },
    {
        icon: <FaMotorcycle size={30} />,
        title: "Rent Bikes",
        description: "Explore the city with our powerful bikes.",
    },
    {
        icon: <FaTruckPickup size={30} />,
        title: "Rent Scooters",
        description: "Convenient and easy-to-ride scooters for quick trips.",
    },
    {
        icon: <FaCar size={30} />,
        title: "Rent Cars",
        description: "Comfortable and well-maintained cars for any journey.",
    },
    {
        icon: <FaMapMarkedAlt size={30} />,
        title: "Real-time Tracking",
        description: "Track your rented vehicle in real-time with our app.",
    },
    {
        icon: <FaWallet size={30} />,
        title: "Easy Payments",
        description: "Hassle-free online payments with multiple options.",
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/about');
    };

    return (
        <Box sx={{ overflowX: 'hidden', bgcolor: '#f5f5f5' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundImage: 'url("/path/to/vehicle-rental-hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
                        Your Journey, Our Vehicles
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 5, maxWidth: '700px', mx: 'auto' }}>
                        Rent cycles, bikes, scooters, and cars with ease and convenience.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleExploreClick}
                        sx={{ px: 5, py: 2, fontSize: '18px' }}
                    >
                        Explore Our Vehicles
                    </Button>
                </motion.div>
            </Box>

            {/* Features Section */}
            <Box sx={{ py: 10, px: 3 }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, mb: 5 }}>
                    Why Choose Us?
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '30px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: '#fff',
                                        backgroundColor: '#3f51b5',
                                        '&:hover': {
                                            backgroundColor: '#303f9f',
                                        },
                                        mb: 2,
                                        width: '60px',
                                        height: '60px',
                                    }}
                                >
                                    {feature.icon}
                                </IconButton>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                    {feature.description}
                                </Typography>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Services Section */}
            <Box sx={{ py: 10, px: 3, bgcolor: '#e0f7fa' }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, mb: 5 }}>
                    Our Services
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaBicycle size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Cycle Rentals
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Eco-friendly cycles for your daily commute or weekend adventure.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaMotorcycle size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Bike Rentals
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Powerful bikes to take you wherever you need to go.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaTruckPickup size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Scooter Rentals
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Scooters that are perfect for quick and easy rides around town.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaCar size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Car Rentals
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Rent cars for comfortable long-distance travel.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaMapMarkedAlt size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Real-time Tracking
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Keep track of your vehicle anytime, anywhere.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <FaWallet size={40} color="#3f51b5" />
                            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                                Easy Payments
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', mt: 2 }}>
                                Pay securely using multiple payment options.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    py: 10,
                    px: 3,
                    textAlign: 'center',
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 5 }}>
                    Ready to Rent Your Vehicle?
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => navigate('/rental')}
                    sx={{ px: 5, py: 2, fontSize: '18px' }}
                >
                    Let's Start Renting
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
