import React, { useState } from 'react';
import { TextField, Button, Box, Typography, InputAdornment, CircularProgress, FormControlLabel, Checkbox } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Lock, Person, LocationOn, Phone, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        return newErrors;
    };

    const handleRegister = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setLoading(true);
        // Simulate registration process
        setTimeout(() => {
            setLoading(false);
            // Handle registration or navigate to another page
        }, 2000);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f0f2f5"
            style={{
                background: 'linear-gradient(135deg, #f0f2f5 30%, #ffffff 90%)',
                overflow: 'hidden',
            }}
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
                {/* Background Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: -1,
                        borderRadius: '15px',
                    }}
                />

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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person style={{ color: '#3f51b5' }} />
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

                {/* Email Field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
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

                {/* Phone Number Field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone style={{ color: '#3f51b5' }} />
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

                {/* Location Field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        error={!!errors.location}
                        helperText={errors.location}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOn style={{ color: '#3f51b5' }} />
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

                {/* Password Field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button onClick={handleClickShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>
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

                {/* Confirm Password Field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{ color: '#3f51b5' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button onClick={handleClickShowConfirmPassword} edge="end">
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>
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

                {/* Terms and Conditions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.agreeToTerms}
                                onChange={handleCheckboxChange}
                                name="agreeToTerms"
                                color="primary"
                            />
                        }
                        label="I agree to the terms and conditions"
                        sx={{ marginBottom: 2 }}
                    />
                    {errors.agreeToTerms && (
                        <Typography color="error" variant="body2" align="center" sx={{ marginBottom: 2 }}>
                            {errors.agreeToTerms}
                        </Typography>
                    )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleRegister}
                        disabled={loading}
                        sx={{ padding: '10px', borderRadius: '8px' }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
                    </Button>
                </motion.div>

                {/* Login Link */}
                <Box marginTop={2} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        Already have an account? <Link to="/login">Login here</Link>
                    </Typography>
                </Box>
            </motion.div>
        </Box>
    );
};

export default RegisterPage;
