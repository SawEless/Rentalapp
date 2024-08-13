import React from 'react';
import { Box, Typography, Switch } from '@mui/material';
import { FaShieldAlt } from 'react-icons/fa';

const PrivacySettings = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                <FaShieldAlt /> Privacy Settings
            </Typography>
            <Box>
                <Typography variant="body1">Profile Visibility</Typography>
                <Switch defaultChecked />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1">Two-Factor Authentication</Typography>
                <Switch />
            </Box>
        </Box>
    );
};

export default PrivacySettings;
