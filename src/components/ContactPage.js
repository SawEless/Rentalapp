// src/components/ContactPage.js
import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
            bgcolor="#f5f5f5"
            minHeight="100vh"
        >
            <Typography variant="h4" gutterBottom color="#333">
                Contact Us
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                We're here to help. Send us a message!
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
                <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#fff' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: <EmailIcon style={{ marginRight: 10 }} />,
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: <EmailIcon style={{ marginRight: 10 }} />,
                        }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        InputProps={{
                            startAdornment: <PhoneIcon style={{ marginRight: 10 }} />,
                        }}
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Send Message
                    </Button>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default ContactPage;
