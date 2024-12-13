import React, { useState } from 'react';
import { register } from '../../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await register({ username, email, password });
    const data = await response.json();
    if (data.message) {
      alert(data.message);
      navigate('/login');
    }
  };

  return (
    <div id="register-container">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="register-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
