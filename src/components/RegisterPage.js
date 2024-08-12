import React from 'react';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Lock, Person, LocationOn, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f0f2f5"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    width: '100%',
                }}
            >
                <Box display="flex" justifyContent="center" marginBottom={4}>
                    <motion.img
                        src="https://img.icons8.com/clouds/100/000000/user.png" // User registration icon
                        alt="register-icon"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: '20px' }}
                    />
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                    Create Account
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" marginBottom={4}>
                    Sign up to get started
                </Typography>

                {/* Name Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Email Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Phone Number Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Phone Number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Location Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Location"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOn style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Password Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        placeholder="Password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Confirm Password Field */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        placeholder="Confirm Password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </motion.div>

                {/* Register Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{
                            marginTop: '20px',
                            padding: '10px 0',
                            fontSize: '16px',
                            backgroundColor: '#3f51b5',
                            color: '#fff',
                            borderRadius: '10px',
                            textTransform: 'none',
                        }}
                    >
                        Register
                    </Button>
                </motion.div>

                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Link to="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        <Typography variant="body2">Already have an account? Login</Typography>
                    </Link>
                </Box>
            </motion.div>
        </Box>
    );
};

export default RegisterPage;
