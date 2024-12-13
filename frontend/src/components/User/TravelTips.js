import React, { useEffect, useState } from 'react';
import { getTravelTips } from '../../api';
import Popup from '../Popup';
import { Link } from 'react-router-dom';

const TravelTips = () => {
  const [travelTips, setTravelTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);

  useEffect(() => {
    const fetchTravelTips = async () => {
      const response = await getTravelTips();
      const data = await response.json();
      setTravelTips(data);
    };
    fetchTravelTips();
  }, []);

  return (
    <div>
      <h2><Link to="/user">🔙</Link>Travel Tips</h2>
      <ul>
        {travelTips.map(tip => (
          <li key={tip.id} onClick={() => setSelectedTip(tip)}>
            {tip.title}
          </li>
        ))}
      </ul>
      {selectedTip && (
        <Popup onClose={() => setSelectedTip(null)}>
          <h3>{selectedTip.title}</h3>
          <p>{selectedTip.content}</p>
        </Popup>
      )}
    </div>
  );
};

export default TravelTips;
