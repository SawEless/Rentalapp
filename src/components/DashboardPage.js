import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, IconButton, AppBar, Toolbar, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AccountCircle, Settings, Notifications, TrendingUp, AttachMoney, Person, Dashboard, Task } from '@mui/icons-material';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardPage = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Revenue',
                data: [12000, 15000, 8000, 18000, 22000, 20000, 25000],
                backgroundColor: '#3f51b5',
                borderColor: '#3f51b5',
                borderWidth: 2,
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `$${tooltipItem.raw.toLocaleString()}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false,
                    color: '#e0e0e0',
                },
                ticks: {
                    callback: (value) => `$${value / 1000}k`,
                },
            },
        },
    };

    return (
        <Container>
            {/* Navbar */}
            <motion.div
                className="dashboard-navbar"
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Vehicle Rental Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Dashboard />
                        </IconButton>
                        <IconButton color="inherit">
                            <Task />
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <IconButton color="inherit">
                            <Notifications />
                        </IconButton>
                        <IconButton color="inherit">
                            <Settings />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </motion.div>

            {/* Taskbar */}
            <motion.div
                className="taskbar"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <Paper elevation={3} sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Tasks Overview</Typography>
                    <Box>
                        <IconButton color="primary" sx={{ marginRight: 1 }}>
                            <Task />
                        </IconButton>
                        <IconButton color="secondary">
                            <Settings />
                        </IconButton>
                    </Box>
                </Paper>
            </motion.div>

            {/* Dashboard Overview */}
            <motion.div
                className="dashboard-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h3" align="center" gutterBottom>
                    Dashboard Overview
                </Typography>
            </motion.div>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper elevation={4} className="dashboard-card-content">
                            <IconButton color="primary">
                                <TrendingUp fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">Total Revenue</Typography>
                            <Typography variant="h4">$120,000</Typography>
                        </Paper>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper elevation={4} className="dashboard-card-content">
                            <IconButton color="secondary">
                                <AttachMoney fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">Earnings</Typography>
                            <Typography variant="h4">$75,000</Typography>
                        </Paper>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper elevation={4} className="dashboard-card-content">
                            <IconButton color="primary">
                                <Person fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">New Users</Typography>
                            <Typography variant="h4">350</Typography>
                        </Paper>
                    </motion.div>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper elevation={4} className="dashboard-chart">
                            <Typography variant="h6" align="left" gutterBottom>
                                Revenue Overview
                            </Typography>
                            <Bar data={data} options={options} />
                        </Paper>
                    </motion.div>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <motion.div
                        className="dashboard-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper elevation={4} className="dashboard-profile">
                            <Avatar sx={{ width: 120, height: 120, marginBottom: 2 }} />
                            <Typography variant="h5">John Doe</Typography>
                            <Typography variant="body1" color="textSecondary">
                                Admin
                            </Typography>
                            {/* Removed View Profile Button */}
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardPage;
