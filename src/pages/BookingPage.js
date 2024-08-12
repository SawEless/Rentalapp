import React from 'react';
import VehicleList from '../components/VehicleList';
import BookingForm from '../components/BookingForm';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Vehicle Rental App</h1>
      <VehicleList />
      <BookingForm />
    </div>
  );
};

export default HomePage;
