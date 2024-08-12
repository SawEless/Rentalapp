import React from 'react';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
                        src="https://img.icons8.com/clouds/100/000000/car.png"
                        alt="logo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                    Welcome Back
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" marginBottom={4}>
                    Login to your account
                </Typography>
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
                    InputLabelProps={{
                        style: { color: '#3f51b5' },
                    }}
                />
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
                        Login
                    </Button>
                </motion.div>
                <Box display="flex" justifyContent="space-between" marginTop={2}>
                    <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        <Typography variant="body2">Forgot Password?</Typography>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        <Typography variant="body2">Register</Typography>
                    </Link>
                </Box>
            </motion.div>
        </Box>
    );
};

export default LoginPage;
