import React, { useEffect, useState } from 'react';
import { getEvents } from '../../api';
import Popup from '../Popup';
import { Link } from 'react-router-dom';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2><Link to="/user">🔙</Link>Event Calendar</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} onClick={() => setSelectedEvent(event)}>
            {event.name} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      {selectedEvent && (
        <Popup onClose={() => setSelectedEvent(null)}>
          <h3>{selectedEvent.name}</h3>
          <p>{selectedEvent.description}</p>
          <p>Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
        </Popup>
      )}
    </div>
  );
};

export default EventCalendar;
