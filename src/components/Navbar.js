import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <AppBar position="static" style={{ backgroundColor: '#2c3e50' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Vehicle Rental
                    </Typography>
                    <Button color="inherit" component={Link} to="/" className="nav-link">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about" className="nav-link">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/services" className="nav-link">
                        Services
                    </Button>
                    <Button color="inherit" component={Link} to="/contact" className="nav-link">
                        Contact
                    </Button>
                    <Button color="inherit" component={Link} to="/login" className="nav-link">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
};

export default Navbar;
