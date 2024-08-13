import React from 'react';
import { Box, Typography, Grid, Paper, IconButton, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaCalendar, FaDollarSign, FaCog, FaPowerOff } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

// Sample chart data
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Sales',
            data: [30, 45, 60, 70, 80, 90],
            borderColor: '#3f51b5',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            fill: true,
        },
    ],
};

const DashboardPage = () => {
    return (
        <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Dashboard
            </Typography>

            {/* Dashboard Widgets */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
                            <CardContent>
                                <Typography variant="h6" color="textSecondary">
                                    Users
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    1,234
                                </Typography>
                            </CardContent>
                            <IconButton sx={{ color: '#3f51b5' }}>
                                <FaUsers size={30} />
                            </IconButton>
                        </Card>
                    </motion.div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
                            <CardContent>
                                <Typography variant="h6" color="textSecondary">
                                    Revenue
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    $12,345
                                </Typography>
                            </CardContent>
                            <IconButton sx={{ color: '#3f51b5' }}>
                                <FaDollarSign size={30} />
                            </IconButton>
                        </Card>
                    </motion.div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
                            <CardContent>
                                <Typography variant="h6" color="textSecondary">
                                    Appointments
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    567
                                </Typography>
                            </CardContent>
                            <IconButton sx={{ color: '#3f51b5' }}>
                                <FaCalendar size={30} />
                            </IconButton>
                        </Card>
                    </motion.div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
                            <CardContent>
                                <Typography variant="h6" color="textSecondary">
                                    Settings
                                </Typography>
                            </CardContent>
                            <IconButton sx={{ color: '#3f51b5' }}>
                                <FaCog size={30} />
                            </IconButton>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>

            {/* Chart Section */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Sales Overview
                </Typography>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Line data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </Paper>
            </Box>

            {/* Actions Section */}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">
                    Recent Activities
                </Typography>
                <IconButton>
                    <MdKeyboardArrowDown />
                </IconButton>
            </Box>

            <Box sx={{ mt: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="body1">
                        User John Doe updated profile settings.
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1">
                        Revenue report generated for Q2.
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1">
                        New appointment scheduled with client.
                    </Typography>
                </Paper>
            </Box>

            {/* Logout Section */}
            <Box sx={{ mt: 4, textAlign: 'right' }}>
                <IconButton color="error">
                    <FaPowerOff size={24} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default DashboardPage;
