import React, { useEffect, useState } from 'react';
import { getDestinations } from '../../api';
import Popup from '../Popup';
import { Link } from 'react-router-dom';

const DestinationGuide = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await getDestinations();
      const data = await response.json();
      setDestinations(data);
    };
    fetchDestinations();
  }, []);

  return (
    <div>
      <h2><Link to="/user">🔙</Link>Destination Guide</h2>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id} onClick={() => setSelectedDestination(destination)}>
            {destination.name}
          </li>
        ))}
      </ul>
      {selectedDestination && (
        <Popup onClose={() => setSelectedDestination(null)}>
          <h3>{selectedDestination.name}</h3>
          <p>{selectedDestination.description}</p>
        </Popup>
      )}
    </div>
  );
};

export default DestinationGuide;
