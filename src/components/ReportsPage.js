import React from 'react';
import { Box, Typography, Button, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FaFilePdf, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ReportsPage = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Reports
            </Typography>
            
            <Box sx={{ mb: 3 }}>
                <Button variant="contained" color="primary" startIcon={<FaChartBar />}>
                    Generate Report
                </Button>
                <Button variant="contained" color="secondary" sx={{ ml: 2 }} startIcon={<FaFilePdf />}>
                    Download PDF
                </Button>
            </Box>
            
            <Paper elevation={3}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Report Type</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Sales Report</TableCell>
                                <TableCell>August 2024</TableCell>
                                <TableCell>Completed</TableCell>
                            </TableRow>
                            {/* Repeat for other reports */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default ReportsPage;
