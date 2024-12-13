import React, { useState, useEffect } from 'react';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../api';
import { Link } from 'react-router-dom';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', description: '' });

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleCreate = async () => {
    await createEvent(newEvent);
    setNewEvent({ name: '', date: '', description: '' });
    const response = await getEvents();
    const data = await response.json();
    setEvents(data);
  };

  const handleUpdate = async (id) => {
    await updateEvent(id, newEvent);
    const response = await getEvents();
    const data = await response.json();
    setEvents(data);
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    const response = await getEvents();
    const data = await response.json();
    setEvents(data);
  };

  return (
    <div>
      <h2><Link to="/user">🔙</Link>Event Management</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          placeholder="Event Name"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <textarea
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          placeholder="Event Description"
        />
        <button type="submit">Create Event</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button onClick={() => handleUpdate(event.id)}>Update</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
