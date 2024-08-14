import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton
} from '@mui/material';
import { FaUsers, FaChartLine, FaCogs, FaBox, FaUserShield, FaCar, FaUserCog, FaTools, FaEnvelope, FaComment, FaFileAlt, FaCalendarAlt, FaUserEdit, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
}));

const AdminDashboard = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleName, setVehicleName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        // Clear the form fields
        setVehicleType('');
        setVehicleName('');
        setPrice('');
        setDescription('');
    };

    const handleAddVehicle = () => {
        // Implement the functionality to add vehicle here
        console.log('Vehicle Added:', { vehicleType, vehicleName, price, description });
        handleClose();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Admin Dashboard
            </Typography>

            {/* Section for Notifications */}
            <Box sx={{ mb: 4 }}>
                <SectionTitle variant="h6">Notifications</SectionTitle>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <StyledPaper elevation={3}>
                        <Typography variant="body1">
                            <FaEnvelope size={20} /> You have 3 new notifications
                        </Typography>
                    </StyledPaper>
                </motion.div>
            </Box>

            {/* Overview Cards */}
            <Grid container spacing={3}>
                {[
                    { icon: <FaUsers />, color: '#1976d2', title: 'Users', subtitle: '1,245 Total Users' },
                    { icon: <FaChartLine />, color: '#388e3c', title: 'Analytics', subtitle: 'View Reports & Insights' },
                    { icon: <FaCogs />, color: '#f57c00', title: 'Settings', subtitle: 'Manage System Settings' },
                    { icon: <FaBox />, color: '#9c27b0', title: 'Inventory', subtitle: 'Manage Product Inventory' },
                    { icon: <FaUserShield />, color: '#0288d1', title: 'Roles & Permissions', subtitle: 'Manage User Roles' },
                    { icon: <FaCar />, color: '#d32f2f', title: 'Vehicle Management', subtitle: 'Add, Edit, Remove Vehicles' },
                    { icon: <FaUserCog />, color: '#7b1fa2', title: 'User Management', subtitle: 'Manage User Accounts' },
                    { icon: <FaTools />, color: '#c2185b', title: 'Tools', subtitle: 'Manage System Tools' },
                    { icon: <FaEnvelope />, color: '#1976d2', title: 'Messaging', subtitle: 'Manage Messages' },
                    { icon: <FaComment />, color: '#e64a19', title: 'Comments', subtitle: 'Manage User Comments' },
                    { icon: <FaFileAlt />, color: '#d32f2f', title: 'Reports', subtitle: 'Generate and View Reports' },
                    { icon: <FaCalendarAlt />, color: '#388e3c', title: 'Calendar', subtitle: 'Schedule and Events' },
                ].map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <StyledPaper elevation={3}>
                                {React.cloneElement(card.icon, { size: 40, style: { color: card.color } })}
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body1">
                                    {card.subtitle}
                                </Typography>
                            </StyledPaper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* Actions */}
            <Box sx={{ mt: 4 }}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                    Actions
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ActionButton variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
                                <FaPlus /> Add New Vehicle
                            </ActionButton>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ActionButton variant="contained" color="secondary" fullWidth>
                                Generate Report
                            </ActionButton>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ActionButton variant="contained" color="success" fullWidth>
                                Manage Inventory
                            </ActionButton>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ActionButton variant="contained" color="info" fullWidth>
                                View Logs
                            </ActionButton>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>

            {/* Add Vehicle Dialog */}
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Add New Vehicle</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Vehicle Type</InputLabel>
                        <Select
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <MenuItem value="car">Car</MenuItem>
                            <MenuItem value="bike">Bike</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Vehicle Name"
                        variant="outlined"
                        value={vehicleName}
                        onChange={(e) => setVehicleName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Price"
                        variant="outlined"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddVehicle} color="primary">
                        Add Vehicle
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
