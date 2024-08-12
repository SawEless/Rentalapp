import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    vehicleId: '',
    userName: '',
    rentalPeriod: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/rentals', formData);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking vehicle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Vehicle</h2>
      <label>
        Vehicle ID:
        <input
          type="text"
          name="vehicleId"
          value={formData.vehicleId}
          onChange={handleChange}
        />
      </label>
      <label>
        Your Name:
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        Rental Period:
        <input
          type="text"
          name="rentalPeriod"
          value={formData.rentalPeriod}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
