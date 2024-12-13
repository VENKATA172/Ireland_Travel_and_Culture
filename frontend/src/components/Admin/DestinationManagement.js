import React, { useState, useEffect } from 'react';
import { getDestinations, createDestination, updateDestination, deleteDestination } from '../../api';
import { Link } from 'react-router-dom';

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await getDestinations();
      const data = await response.json();
      setDestinations(data);
    };
    fetchDestinations();
  }, []);

  const handleCreate = async () => {
    await createDestination(newDestination);
    setNewDestination({ name: '', description: '' });
    const response = await getDestinations();
    const data = await response.json();
    setDestinations(data);
  };

  const handleUpdate = async (id) => {
    await updateDestination(id, newDestination);
    const response = await getDestinations();
    const data = await response.json();
    setDestinations(data);
  };

  const handleDelete = async (id) => {
    await deleteDestination(id);
    const response = await getDestinations();
    const data = await response.json();
    setDestinations(data);
  };

  return (
    <div>
    
      <h2><Link to="/user">🔙</Link>Destination Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={newDestination.name}
          onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })}
          placeholder="Destination Name"
        />
        <textarea
          value={newDestination.description}
          onChange={(e) => setNewDestination({ ...newDestination, description: e.target.value })}
          placeholder="Destination Description"
        />
        <button type="submit">Create Destination</button>
      </form>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            {destination.name}
            <button onClick={() => handleUpdate(destination.id)}>Update</button>
            <button onClick={() => handleDelete(destination.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationManagement;
