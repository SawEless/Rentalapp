import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <Box
            component="footer"
            bgcolor="#3f51b5"
            color="#fff"
            padding="20px"
            position="static"
            bottom="0"
            width="100%"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Typography variant="body2" marginBottom={2}>
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                flexGrow={1}
                alignItems="flex-end"
                paddingBottom="10px"
            >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{ margin: '0 10px' }}>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
                        <Facebook fontSize="large" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{ margin: '0 10px' }}>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
                        <Twitter fontSize="large" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{ margin: '0 10px' }}>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
                        <Instagram fontSize="large" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{ margin: '0 10px' }}>
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
                        <LinkedIn fontSize="large" />
                    </Link>
                </motion.div>
            </Box>
        </Box>
    );
};

export default Footer;
