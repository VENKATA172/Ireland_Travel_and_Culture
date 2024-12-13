import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api';

const Navbar = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav id="navbar">
      <ul>
        {isAdmin ? (
          <>
            <li><Link to="/admin/users">User Management</Link></li>
            <li><Link to="/admin/events">Event Management</Link></li>
            <li><Link to="/admin/destinations">Destination Management</Link></li>
            <li><Link to="/admin/travel-tips">Travel Tip Management</Link></li>
            <li><Link to="/admin/user-view">User View</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/user/destinations">Destination Guide</Link></li>
            <li><Link to="/user/events">Event Calendar</Link></li>
            <li><Link to="/user/accommodations">Accommodation Listings</Link></li>
            <li><Link to="/user/travel-tips">Travel Tips</Link></li>
          </>
        )}
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
