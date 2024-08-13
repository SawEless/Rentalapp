import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, IconButton, Tooltip } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { useSpring, animated } from 'react-spring';
import { FaChartLine, FaUserAlt, FaCog, FaDollarSign, FaCalendarAlt, FaBox, FaBell, FaSun, FaMoon } from 'react-icons/fa';
import { Chart as ChartJS, Title, Tooltip as ChartTooltip, Legend, LineElement, BarElement, PointElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
    Title,
    ChartTooltip,
    Legend,
    LineElement,
    PointElement,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
);

// Chart Data
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Monthly Rentals',
            data: [30, 40, 35, 50, 60, 55, 65],
            borderColor: '#3f51b5',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            borderWidth: 2,
            tension: 0.4,
        },
    ],
};

const barChartData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
        {
            label: 'Vehicle Rentals by Region',
            data: [120, 150, 180, 110],
            backgroundColor: ['#3f51b5', '#4caf50', '#ff5722', '#2196f3'],
        },
    ],
};

const pieChartData = {
    labels: ['Sedans', 'SUVs', 'Trucks', 'Vans'],
    datasets: [
        {
            label: 'Vehicle Types',
            data: [40, 30, 20, 10],
            backgroundColor: ['#3f51b5', '#4caf50', '#ff5722', '#2196f3'],
        },
    ],
};

// Animation setup
const useAnimation = () => useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
});

const DashboardPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const animationProps = useAnimation();

    const handleDarkModeToggle = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: darkMode ? '#121212' : '#f5f5f5', color: darkMode ? '#e0e0e0' : '#000' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography>
                <Tooltip title="Toggle Dark Mode">
                    <IconButton onClick={handleDarkModeToggle} sx={{ color: darkMode ? '#fff' : '#000', transition: 'color 0.3s' }}>
                        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </IconButton>
                </Tooltip>
            </Box>

            <Grid container spacing={4}>
                {/* Overview Cards */}
                <Grid item xs={12} md={4}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaUserAlt size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        Active Users
                                    </Typography>
                                </Box>
                                <Typography variant="h4" sx={{ mt: 2 }}>450</Typography>
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaDollarSign size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        Total Revenue
                                    </Typography>
                                </Box>
                                <Typography variant="h4" sx={{ mt: 2 }}>$1,200</Typography>
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCalendarAlt size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        New Bookings
                                    </Typography>
                                </Box>
                                <Typography variant="h4" sx={{ mt: 2 }}>25</Typography>
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>
            </Grid>

            <Grid container spacing={4} mt={4}>
                {/* Line Chart */}
                <Grid item xs={12} md={6}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaChartLine size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        Monthly Rentals
                                    </Typography>
                                </Box>
                                <Line data={lineChartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (tooltipItem) => ` ${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}` } } } }} />
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>

                {/* Bar Chart */}
                <Grid item xs={12} md={6}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaBox size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        Rentals by Region
                                    </Typography>
                                </Box>
                                <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (tooltipItem) => ` ${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}` } } } }} />
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>
            </Grid>

            <Grid container spacing={4} mt={4}>
                {/* Pie Chart */}
                <Grid item xs={12}>
                    <animated.div style={animationProps}>
                        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCog size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                    <Typography variant="h6" sx={{ ml: 2 }}>
                                        Vehicle Types
                                    </Typography>
                                </Box>
                                <Pie data={pieChartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (tooltipItem) => ` ${tooltipItem.label}: ${tooltipItem.formattedValue}` } } } }} />
                            </CardContent>
                        </Card>
                    </animated.div>
                </Grid>
            </Grid>

            {/* Recent Activities */}
            <Grid container spacing={4} mt={4}>
                <Grid item xs={12}>
                    <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: darkMode ? '#333' : '#fff' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FaBell size={30} color={darkMode ? '#e0e0e0' : '#000'} />
                                <Typography variant="h6" sx={{ ml: 2 }}>
                                    Recent Activities
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Box>
                                <Typography variant="body2" gutterBottom>
                                    🚀 New vehicle added to the fleet!
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    🛠️ Maintenance scheduled for August 20.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    💬 User feedback received.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardPage;
