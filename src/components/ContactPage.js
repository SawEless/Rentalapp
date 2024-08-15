// src/components/ContactPage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Divider, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const onSubmit = (data) => {
        // Simulate sending message
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        reset(); // Reset form fields
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
            bgcolor="#f5f5f5"
            minHeight="100vh"
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
                Contact Us
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                We're here to help. Send us a message or find our contact details below.
            </Typography>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Send Us a Message
                    </Typography>
                    <Divider sx={{ marginBottom: '20px' }} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                startAdornment: <EmailIcon sx={{ color: '#3f51b5' }} />,
                            }}
                            {...register('name', { required: 'Name is required' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                startAdornment: <EmailIcon sx={{ color: '#3f51b5' }} />,
                            }}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                    message: 'Enter a valid Gmail address',
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                startAdornment: <PhoneIcon sx={{ color: '#3f51b5' }} />,
                            }}
                            {...register('phone')}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            InputProps={{
                                startAdornment: <PhoneIcon sx={{ color: '#3f51b5' }} />,
                            }}
                            {...register('message', { required: 'Message is required' })}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: '20px' }}
                            >
                                Send Message
                            </Button>
                        </motion.div>
                    </form>
                </Paper>
            </motion.div>

            {/* Contact Information Section */}
            <Box
                sx={{
                    maxWidth: '800px',
                    width: '100%',
                    marginTop: '40px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '20px' }}>
                    Our Contact Information
                </Typography>
                <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <LocationOnIcon sx={{ color: '#3f51b5', marginRight: '10px' }} />
                        1234 Street Name, City, Country
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <PhoneIcon sx={{ color: '#3f51b5', marginRight: '10px' }} />
                        (123) 456-7890
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <EmailIcon sx={{ color: '#3f51b5', marginRight: '10px' }} />
                        contact@yourcompany.com
                    </Typography>
                </Paper>
            </Box>

            {/* Snackbar for form submission feedback */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactPage;
