import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

// Example data
const vehicleData = {
    car: {
        title: 'Luxury Car',
        description: 'A comfortable and stylish luxury car for all your needs.',
        price: '$100 per day',
        features: ['Leather seats', 'Navigation system', 'Bluetooth'],
    },
    bike: {
        title: 'Sport Bike',
        description: 'High-performance bike for thrilling rides.',
        price: '$60 per day',
        features: ['High speed', 'Comfortable seating', 'Helmet included'],
    },
    cycle: {
        title: 'Mountain Bike',
        description: 'Durable mountain bike for off-road adventures.',
        price: '$30 per day',
        features: ['Durable frame', 'Off-road tires', 'Suspension'],
    },
    scooter: {
        title: 'Electric Scooter',
        description: 'Eco-friendly and easy to use for short trips.',
        price: '$20 per day',
        features: ['Compact', 'Eco-friendly', 'Easy to use'],
    },
};

const VehicleDetailPage = () => {
    const { vehicleType } = useParams();
    const vehicle = vehicleData[vehicleType];

    if (!vehicle) {
        return <Typography variant="h6">Vehicle not found</Typography>;
    }

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
            <Typography variant="h4" gutterBottom>
                {vehicle.title}
            </Typography>
            <Card sx={{ marginBottom: '20px', padding: '20px' }}>
                <CardContent>
                    <Typography variant="h6">Description</Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                        {vehicle.description}
                    </Typography>
                    <Typography variant="h6">Price</Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                        {vehicle.price}
                    </Typography>
                    <Typography variant="h6">Features</Typography>
                    <ul>
                        {vehicle.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Button variant="contained" color="primary">
                Rent Now
            </Button>
        </Box>
    );
};

export default VehicleDetailPage;
