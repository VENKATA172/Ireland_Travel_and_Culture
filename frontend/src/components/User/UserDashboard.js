import React from 'react';
import Navbar from '../Navbar';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Navbar isAdmin={false} />
    </div>
  );
};

export default UserDashboard;
