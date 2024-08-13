import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent, Divider, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { FaBell, FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const notificationsData = [
    { id: 1, type: 'info', message: 'New vehicle added to the fleet!', timestamp: '2024-08-13 10:00' },
    { id: 2, type: 'success', message: 'Payment successfully processed.', timestamp: '2024-08-13 09:30' },
    { id: 3, type: 'warning', message: 'Maintenance scheduled for August 20.', timestamp: '2024-08-12 16:00' },
    { id: 4, type: 'error', message: 'Payment failed due to insufficient funds.', timestamp: '2024-08-12 14:00' },
];

const NotificationIcon = ({ type }) => {
    switch (type) {
        case 'info':
            return <FaInfoCircle style={{ color: '#2196f3' }} />;
        case 'success':
            return <FaCheckCircle style={{ color: '#4caf50' }} />;
        case 'warning':
            return <FaExclamationTriangle style={{ color: '#ff9800' }} />;
        case 'error':
            return <FaExclamationTriangle style={{ color: '#f44336' }} />;
        default:
            return <FaBell />;
    }
};

const Notifications = ({ darkMode }) => {
    const [visible, setVisible] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const notificationAnimation = useSpring({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        config: { tension: 220, friction: 120 },
    });

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <Box sx={{ position: 'relative', width: isMobile ? '100%' : 400, mx: 'auto', my: 3 }}>
            <Card sx={{ position: 'absolute', right: 0, width: '100%', borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        <NotificationIcon type="info" /> Notifications
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    {notificationsData.map(notification => (
                        <animated.div key={notification.id} style={notificationAnimation}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <NotificationIcon type={notification.type} />
                                <Box sx={{ flexGrow: 1, ml: 2 }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        {notification.message}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {notification.timestamp}
                                    </Typography>
                                </Box>
                                <Tooltip title="Close">
                                    <IconButton onClick={handleClose} size="small">
                                        <FaBell />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </animated.div>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
};

export default Notifications;
