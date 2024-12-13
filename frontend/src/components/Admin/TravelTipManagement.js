import React, { useState, useEffect } from 'react';
import { getTravelTips, createTravelTip, updateTravelTip, deleteTravelTip } from '../../api';
import { Link } from 'react-router-dom';

const TravelTipManagement = () => {
  const [travelTips, setTravelTips] = useState([]);
  const [newTravelTip, setNewTravelTip] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchTravelTips = async () => {
      const response = await getTravelTips();
      const data = await response.json();
      setTravelTips(data);
    };
    fetchTravelTips();
  }, []);

  const handleCreate = async () => {
    await createTravelTip(newTravelTip);
    setNewTravelTip({ title: '', content: '' });
    const response = await getTravelTips();
    const data = await response.json();
    setTravelTips(data);
  };

  const handleUpdate = async (id) => {
    await updateTravelTip(id, newTravelTip);
    const response = await getTravelTips();
    const data = await response.json();
    setTravelTips(data);
  };

  const handleDelete = async (id) => {
    await deleteTravelTip(id);
    const response = await getTravelTips();
    const data = await response.json();
    setTravelTips(data);
  };

  return (
    <div>
      <h2><Link to="/user">🔙</Link>Travel Tip Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={newTravelTip.title}
          onChange={(e) => setNewTravelTip({ ...newTravelTip, title: e.target.value })}
          placeholder="Travel Tip Title"
        />
        <textarea
          value={newTravelTip.content}
          onChange={(e) => setNewTravelTip({ ...newTravelTip, content: e.target.value })}
          placeholder="Travel Tip Content"
        />
        <button type="submit">Create Travel Tip</button>
      </form>
      <ul>
        {travelTips.map(travelTip => (
          <li key={travelTip.id}>
            {travelTip.title}
            <button onClick={() => handleUpdate(travelTip.id)}>Update</button>
            <button onClick={() => handleDelete(travelTip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelTipManagement;
