import React, { useEffect, useState } from 'react';
import { getAllUsers, approveUser, denyUser, suspendUser } from '../../api';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsers();
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleApprove = async (id) => {
    await approveUser(id);
    const response = await getAllUsers();
    const data = await response.json();
    setUsers(data);
  };

  const handleDeny = async (id) => {
    await denyUser(id);
    const response = await getAllUsers();
    const data = await response.json();
    setUsers(data);
  };

  const handleSuspend = async (id) => {
    await suspendUser(id);
    const response = await getAllUsers();
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      <h2><Link to="/user">🔙</Link>User Management</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.status}
            {user.status === 'pending' ? (
              <>
                <button onClick={() => handleApprove(user.id)}>Approve</button>
                <button onClick={() => handleDeny(user.id)}>Deny</button>
              </>
            ) : (
              <button onClick={() => handleSuspend(user.id)}>Suspend</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
