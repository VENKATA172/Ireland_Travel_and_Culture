import React, { useState } from 'react';
import { login } from '../../api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login({ username, password });
    const data = await response.json();
    if (data.accessToken) {
      localStorage.setItem('token', data.accessToken);
      if (data.role === 'admin') {
        navigate('/admin');
      } else if (data.role === 'member') {
        navigate('/user');
      } else {
        navigate('/login');
      }
    }
  };

  return (
    <div id="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Create one</Link></p>
    </div>
  );
};

export default Login;
