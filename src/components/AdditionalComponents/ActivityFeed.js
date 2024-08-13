import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaBell } from 'react-icons/fa';

const ActivityFeed = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                <FaBell /> Activity Feed
            </Typography>
            <Typography variant="body1">
                Here are your recent activities:
            </Typography>
            <ul>
                <li>Joined a new group</li>
                <li>Updated your profile picture</li>
                <li>Received a new connection request</li>
            </ul>
        </Box>
    );
};

export default ActivityFeed;
