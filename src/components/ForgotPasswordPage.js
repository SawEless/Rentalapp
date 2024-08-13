import React, { useState } from 'react';
import { TextField, Button, Box, Typography, InputAdornment, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email) {
            setLoading(true);
            // Simulate sending reset link
            setTimeout(() => {
                setLoading(false);
                setSubmitted(true);
            }, 2000);
        }
    };

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
                    position: 'relative',
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#3f51b5',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3f51b5',
                                },
                            },
                        }}
                    />
                </motion.div>
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
                            position: 'relative',
                        }}
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading && <CircularProgress size={24} style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />}
                        {submitted ? 'Send Reset Link' : 'Check Your Email'}
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
