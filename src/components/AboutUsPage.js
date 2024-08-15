import React from 'react';
import { Box, Typography, Grid, Avatar, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaUsers, FaCogs, FaThumbsUp, FaShieldAlt, FaRocket, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const testimonials = [
    {
        name: "Alice Johnson",
        text: "Absolutely fantastic service! The team was very professional and the experience was seamless.",
        avatar: "/path/to/avatar1.jpg",
    },
    {
        name: "Michael Brown",
        text: "The attention to detail and customer support were top-notch. Highly recommend!",
        avatar: "/path/to/avatar2.jpg",
    },
    {
        name: "Emily Davis",
        text: "A truly remarkable experience. Will definitely use their services again.",
        avatar: "/path/to/avatar3.jpg",
    },
];

const features = [
    {
        icon: <FaRegLightbulb size={30} />,
        title: "Innovation",
        description: "We are constantly innovating to bring you the best solutions.",
    },
    {
        icon: <FaUsers size={30} />,
        title: "Community",
        description: "We build strong communities through our services.",
    },
    {
        icon: <FaCogs size={30} />,
        title: "Reliability",
        description: "Our services are reliable and trustworthy.",
    },
    {
        icon: <FaThumbsUp size={30} />,
        title: "Satisfaction",
        description: "Customer satisfaction is our top priority.",
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: "Security",
        description: "We ensure the highest levels of security for our users.",
    },
    {
        icon: <FaRocket size={30} />,
        title: "Performance",
        description: "Our platform is optimized for speed and efficiency.",
    },
    {
        icon: <FaChartLine size={30} />,
        title: "Growth",
        description: "We focus on helping you grow and succeed.",
    },
];

const AboutUsPage = () => {
    const navigate = useNavigate();

    const handleGetInTouchClick = () => {
        navigate('/contact');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                bgcolor: '#fafafa',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            {/* About Us Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ marginBottom: '60px' }}
            >
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                    About Us
                </Typography>
                <Typography variant="h6" paragraph sx={{ maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                    We are a company dedicated to delivering exceptional services and building lasting relationships with our customers.
                </Typography>
            </motion.div>

            {/* Features Section */}
            <Grid container spacing={4} sx={{ maxWidth: '1200px', marginBottom: '60px' }}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
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
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                {feature.description}
                            </Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* Testimonials Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1000px',
                    marginBottom: '60px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '30px' }}
                >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                        What Our Customers Say
                    </Typography>
                </motion.div>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3, duration: 0.8 }}
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                                    textAlign: 'center',
                                }}
                            >
                                <Avatar src={testimonial.avatar} sx={{ width: 80, height: 80, marginBottom: 2, margin: '0 auto' }} />
                                <Typography variant="body1" paragraph sx={{ color: '#666', fontStyle: 'italic' }}>
                                    "{testimonial.text}"
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                    - {testimonial.name}
                                </Typography>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '20px',
                        bgcolor: '#3f51b5',
                        borderRadius: '10px',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleGetInTouchClick}
                    >
                        Get in Touch
                    </Button>
                </Box>
            </motion.div>
        </Box>
    );
};

export default AboutUsPage;
