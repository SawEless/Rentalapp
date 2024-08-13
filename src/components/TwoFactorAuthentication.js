import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaCog } from 'react-icons/fa';

const TwoFactorAuthentication = () => {
    return (
        <Box>
            <Typography variant="h6">Two-Factor Authentication</Typography>
            <Typography variant="body1">Setup 2FA to enhance your account security.</Typography>
            <Button variant="contained" color="primary" startIcon={<FaCog />}>
                Setup 2FA
            </Button>
        </Box>
    );
};

export default TwoFactorAuthentication;
