import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, Paper } from '@mui/material';
import { FaUserPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const UserManagementPage = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                User Management
            </Typography>
            
            <Box sx={{ mb: 3 }}>
                <Button variant="contained" color="primary" startIcon={<FaUserPlus />}>
                    Add New User
                </Button>
            </Box>
            
            <Paper elevation={3}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>john.doe@example.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <FaEdit />
                                    </IconButton>
                                    <IconButton color="error">
                                        <FaTrashAlt />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            {/* Repeat for other users */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default UserManagementPage;
