import React from 'react';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
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
                        src="https://img.icons8.com/clouds/100/000000/question-mark.png" // Thinking or forget password icon
                        alt="forget-password-icon"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: '20px' }}
                    />
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                    Forgot Password
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" marginBottom={4}>
                    Enter your email to reset your password
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
                        Send Reset Link
                    </Button>
                </motion.div>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Link to="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        <Typography variant="body2">Back to Login</Typography>
                    </Link>
                </Box>
            </motion.div>
        </Box>
    );
};

export default ForgotPasswordPage;
