import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaChartLine } from 'react-icons/fa';

const AIRecommendations = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                <FaChartLine /> AI Recommendations
            </Typography>
            <Typography variant="body1">
                Based on your recent activities, we recommend the following:
            </Typography>
            <ul>
                <li>Connect with industry professionals</li>
                <li>Join relevant groups and forums</li>
                <li>Update your profile with recent achievements</li>
            </ul>
        </Box>
    );
};

export default AIRecommendations;
