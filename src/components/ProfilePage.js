import React, { useState } from 'react';
import {
    Box, Typography, Button, Divider, IconButton, Paper, Grid, Avatar, TextField, Switch, LinearProgress, MenuItem, Select, FormControl, InputLabel, List, ListItem, ListItemText, CircularProgress
} from '@mui/material';
import {
    FaCamera, FaEdit, FaSave, FaBell, FaShieldAlt, FaChartLine, FaCog, FaMoon, FaSun, FaUserCheck, FaLink, FaChartPie, FaSync, FaUserFriends, FaLinkedin, FaTwitter, FaFacebook
} from 'react-icons/fa';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

// Dark Mode Toggle Component
const DarkModeToggle = ({ darkMode, setDarkMode }) => (
    <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
        {darkMode ? <FaMoon /> : <FaSun />}
    </IconButton>
);

// Theme Configuration
const createAppTheme = (darkMode, themeColor) => createTheme({
    palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
            main: themeColor,
        },
        background: {
            default: darkMode ? '#121212' : '#f5f5f5',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '20px',
                    borderRadius: '16px',
                    boxShadow: darkMode ? '0 4px 8px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                },
            },
        },
    },
});

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [themeColor, setThemeColor] = useState('#1976d2'); // Default color
    const [profileCompletion, setProfileCompletion] = useState(70);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [profileVisibility, setProfileVisibility] = useState(true);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const theme = createAppTheme(darkMode, themeColor);

    const handleEdit = () => setIsEditing(!isEditing);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    padding: 4,
                    maxWidth: 1200,
                    margin: '0 auto',
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {/* Dark Mode and Theme Color */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="theme-color-label">Theme Color</InputLabel>
                        <Select
                            labelId="theme-color-label"
                            id="theme-color-select"
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                        >
                            <MenuItem value="#1976d2">Blue</MenuItem>
                            <MenuItem value="#388e3c">Green</MenuItem>
                            <MenuItem value="#d32f2f">Red</MenuItem>
                            <MenuItem value="#7b1fa2">Purple</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Profile Completion Tracker */}
                <Paper sx={{ mb: 3 }}>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Profile Completion
                        </Typography>
                        <LinearProgress variant="determinate" value={profileCompletion} sx={{ mt: 2, borderRadius: '10px' }} />
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            {profileCompletion}% Complete
                        </Typography>
                    </Box>
                </Paper>

                <Paper sx={{ mb: 3 }}>
                    <Grid container spacing={3}>
                        {/* Profile Picture */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar
                                    alt="Profile Picture"
                                    src="https://via.placeholder.com/150"
                                    sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
                                />
                                <Button
                                    variant="contained"
                                    startIcon={<FaCamera />}
                                    sx={{ mt: 2 }}
                                    onClick={() => alert('Change Picture functionality coming soon!')}
                                >
                                    Change Picture
                                </Button>
                            </Box>
                        </Grid>

                        {/* Profile Information */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h5" gutterBottom>
                                    John Doe
                                </Typography>
                                <IconButton onClick={handleEdit} color="primary">
                                    {isEditing ? <FaSave /> : <FaEdit />}
                                </IconButton>
                            </Box>
                            {isEditing ? (
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Bio"
                                        multiline
                                        rows={3}
                                        defaultValue="This is your bio"
                                        sx={{ mb: 3 }}
                                    />
                                    <Button variant="contained" color="primary" onClick={() => setIsEditing(false)}>
                                        Save
                                    </Button>
                                </Box>
                            ) : (
                                <Typography variant="body1">
                                    This is your bio. Here you can write something about yourself.
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Paper>

                <Divider sx={{ my: 4 }} />

                {/* Additional Features */}
                <Grid container spacing={3}>
                    {/* Notification Settings */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                <FaBell style={{ marginRight: 8 }} /> Notification Settings
                            </Typography>
                            <Box>
                                <Typography variant="body1">Email Notifications</Typography>
                                <Switch
                                    checked={emailNotifications}
                                    onChange={(e) => setEmailNotifications(e.target.checked)}
                                />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body1">SMS Notifications</Typography>
                                <Switch
                                    checked={smsNotifications}
                                    onChange={(e) => setSmsNotifications(e.target.checked)}
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Privacy Settings */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                <FaShieldAlt style={{ marginRight: 8 }} /> Privacy Settings
                            </Typography>
                            <Box>
                                <Typography variant="body1">Profile Visibility</Typography>
                                <Switch
                                    checked={profileVisibility}
                                    onChange={(e) => setProfileVisibility(e.target.checked)}
                                />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body1">Two-Factor Authentication</Typography>
                                <Switch
                                    checked={twoFactorAuth}
                                    onChange={(e) => setTwoFactorAuth(e.target.checked)}
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* AI Recommendations */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                <FaChartLine style={{ marginRight: 8 }} /> AI Recommendations
                            </Typography>
                            <Typography variant="body1">
                                Based on your recent activities, we recommend the following:
                            </Typography>
                            <ul>
                                <li>Connect with industry professionals</li>
                                <li>Join relevant groups and forums</li>
                                <li>Update your profile with recent achievements</li>
                            </ul>
                        </Paper>
                    </Grid>

                    {/* Activity Feed */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                <FaSync style={{ marginRight: 8 }} /> Activity Feed
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Joined the 'Tech Enthusiasts' group" secondary="2 days ago" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Updated profile picture" secondary="3 days ago" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Added a new project to the portfolio" secondary="5 days ago" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>

                    {/* Social Media Integration */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                <FaUserFriends style={{ marginRight: 8 }} /> Social Media Integration
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Connect your profile with social media platforms:
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <IconButton color="primary" href="https://www.linkedin.com" target="_blank">
                                        <FaLinkedin />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" href="https://twitter.com" target="_blank">
                                        <FaTwitter />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" href="https://www.facebook.com" target="_blank">
                                        <FaFacebook />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" href="https://www.instagram.com" target="_blank">
                                        <FaUserCheck />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default ProfilePage;
