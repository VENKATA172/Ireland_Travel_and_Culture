import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserDashboard from './components/User/UserDashboard';
import withAuth from './components/withAuth';
import UserManagement from './components/Admin/UserManagement';
import EventManagement from './components/Admin/EventManagement';
import DestinationManagement from './components/Admin/DestinationManagement';
import TravelTipManagement from './components/Admin/TravelTipManagement';
import UserView from './components/Admin/UserView';
import DestinationGuide from './components/User/DestinationGuide';
import EventCalendar from './components/User/EventCalendar';
import AccommodationListings from './components/User/AccommodationListings';
import TravelTips from './components/User/TravelTips';

const AuthAdminDashboard = withAuth(AdminDashboard);
const AuthUserDashboard = withAuth(UserDashboard);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AuthAdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/events" element={<EventManagement />} />
        <Route path="/admin/destinations" element={<DestinationManagement />} />
        <Route path="/admin/travel-tips" element={<TravelTipManagement />} />
        <Route path="/admin/user-view" element={<UserView />} />
        <Route path="/user" element={<AuthUserDashboard />} />
        <Route path="/user/destinations" element={<DestinationGuide />} />
        <Route path="/user/events" element={<EventCalendar />} />
        <Route path="/user/accommodations" element={<AccommodationListings />} />
        <Route path="/user/travel-tips" element={<TravelTips />} />
      </Routes>
    </Router>
  );
}

export default App;
