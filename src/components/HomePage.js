import React from 'react';
import { Box, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Home, Info, Contacts, Work } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
            style={{
                background: 'linear-gradient(135deg, #f5f5f5 30%, #ffffff 90%)',
                overflow: 'hidden',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    maxWidth: '800px',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Welcome to Your Dashboard
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    Discover your personalized experience and manage your activities.
                </Typography>
                
                {/* Action Buttons */}
                <Box marginTop={4} display="flex" justifyContent="center" flexWrap="wrap">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ margin: '10px' }}
                    >
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Avatar style={{ backgroundColor: '#3f51b5' }}><Home /></Avatar>}
                                style={{ padding: '10px 20px' }}
                            >
                                Profile
                            </Button>
                        </Link>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ margin: '10px' }}
                    >
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Avatar style={{ backgroundColor: '#f50057' }}><Info /></Avatar>}
                                style={{ padding: '10px 20px' }}
                            >
                                About Us
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ margin: '10px' }}
                    >
                        <Link to="/services" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="success"
                                startIcon={<Avatar style={{ backgroundColor: '#4caf50' }}><Work /></Avatar>}
                                style={{ padding: '10px 20px' }}
                            >
                                Services
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ margin: '10px' }}
                    >
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="info"
                                startIcon={<Avatar style={{ backgroundColor: '#00bcd4' }}><Contacts /></Avatar>}
                                style={{ padding: '10px 20px' }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </motion.div>
                </Box>
                
                {/* Feature Cards */}
                <Grid container spacing={3} marginTop={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                                <Typography variant="h6">Feature 1</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description of the first feature.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                                <Typography variant="h6">Feature 2</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description of the second feature.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                                <Typography variant="h6">Feature 3</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description of the third feature.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                                <Typography variant="h6">Feature 4</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Description of the fourth feature.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    );
};

export default HomePage;
