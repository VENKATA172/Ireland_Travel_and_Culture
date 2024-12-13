import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserRole } from '../api';

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
          navigate('/login');
        } else {
          const role = await getUserRole();
          if (role === 'admin') {
            navigate('/admin');
          } else if (role === 'member') {
            navigate('/user');
          } else {
            navigate('/login');
          }
        }
      };
      checkAuth();
    }, [navigate]);

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
