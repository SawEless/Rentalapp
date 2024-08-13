import React from 'react';
import { Box, Typography, Switch } from '@mui/material';
import { FaBell } from 'react-icons/fa';

const NotificationSettings = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                <FaBell /> Notification Settings
            </Typography>
            <Box>
                <Typography variant="body1">Email Notifications</Typography>
                <Switch defaultChecked />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1">SMS Notifications</Typography>
                <Switch />
            </Box>
        </Box>
    );
};

export default NotificationSettings;
