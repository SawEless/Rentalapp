import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Available Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle._id}>
            <h3>{vehicle.model}</h3>
            <p>Type: {vehicle.type}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Available: {vehicle.availability ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
