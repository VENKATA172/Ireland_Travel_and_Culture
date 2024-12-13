import React from 'react';
import Navbar from '../Navbar';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Navbar isAdmin={true} />
    </div>
  );
};

export default AdminDashboard;
