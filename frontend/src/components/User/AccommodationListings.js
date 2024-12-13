import React, { useEffect, useState } from 'react';
import { getAccommodations } from '../../api';
import Popup from '../Popup';
import { Link } from 'react-router-dom';

const AccommodationListings = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      const response = await getAccommodations();
      const data = await response.json();
      setAccommodations(data);
    };
    fetchAccommodations();
  }, []);

  return (
    <div>
    
      <h2><Link to="/user">🔙</Link>Accommodation Listings</h2>
      <ul>
        {accommodations.map(accommodation => (
          <li key={accommodation.id} onClick={() => setSelectedAccommodation(accommodation)}>
            {accommodation.name} - {accommodation.location}
          </li>
        ))}
      </ul>
      {selectedAccommodation && (
        <Popup onClose={() => setSelectedAccommodation(null)}>
          <h3>{selectedAccommodation.name}</h3>
          <p>{selectedAccommodation.location}</p>
          <p>{selectedAccommodation.description}</p>
        </Popup>
      )}
    </div>
  );
};

export default AccommodationListings;
