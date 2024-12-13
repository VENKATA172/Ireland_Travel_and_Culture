import React from 'react';
import UserDashboard from '../User/UserDashboard';
import { Link } from 'react-router-dom';
import DestinationGuide from './../User/DestinationGuide';
import EventCalendar from './../User/EventCalendar';
import AccommodationListings from './../User/AccommodationListings';
import TravelTips from './../User/TravelTips';

const UserView = () => {
  return (
    <div>
      <h2><Link to="/user">🔙</Link>User View</h2>
      <DestinationGuide />
      <EventCalendar />
      <AccommodationListings />
      <TravelTips />
    </div>
  );
};

export default UserView;
