import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, IconButton } from '@mui/material';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InventoryManagementPage = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Inventory Management
            </Typography>
            
            <Box sx={{ mb: 3 }}>
                <Button variant="contained" color="primary" startIcon={<FaPlus />}>
                    Add New Vehicle
                </Button>
            </Box>
            
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Vehicle Inventory
                </Typography>
                <Grid container spacing={2}>
                    {/* Example vehicle item */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <Typography variant="h6">
                                Vehicle Name
                            </Typography>
                            <Typography variant="body1">
                                Type: SUV<br />
                                Price: $20,000
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <IconButton color="primary">
                                    <FaEdit />
                                </IconButton>
                                <IconButton color="error">
                                    <FaTrashAlt />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Repeat for other vehicles */}
                </Grid>
            </Paper>
        </Box>
    );
};

export default InventoryManagementPage;
