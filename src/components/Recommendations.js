// frontend/src/components/Recommendations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = ({ vehicleId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`/api/recommendations/${vehicleId}`);
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations", error);
      }
    };

    fetchRecommendations();
  }, [vehicleId]);

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map(rec => (
          <li key={rec.vehicle_id}>{rec.type} - {rec.feature1}, {rec.feature2}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
