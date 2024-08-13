import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const vehicleData = {
    1: { name: 'Sedan', image: 'https://example.com/sedan.jpg', price: '$50/day', description: 'A comfortable sedan for city drives.' },
    2: { name: 'SUV', image: 'https://example.com/suv.jpg', price: '$70/day', description: 'A spacious SUV for family trips.' },
    // Add more vehicle details as needed
};

const VehicleDetailsPage = () => {
    const { id } = useParams();
    const vehicle = vehicleData[id];

    if (!vehicle) {
        return <Typography variant="h6">Vehicle not found</Typography>;
    }

    return (
        <Box padding={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={vehicle.image}
                        alt={vehicle.name}
                    />
                    <CardContent>
                        <Typography variant="h4">{vehicle.name}</Typography>
                        <Typography variant="h6" color="textSecondary">
                            {vehicle.price}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {vehicle.description}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Book Now
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </Box>
    );
};

export default VehicleDetailsPage;
