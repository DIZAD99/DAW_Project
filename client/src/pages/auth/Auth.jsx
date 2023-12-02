import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Auth.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();  // useNavigate replaces useHistory in React Router v6
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emailVal = {
          email: location.state || {},
        };

        const response = await axios.post('http://localhost:5000/utilisateur/who', emailVal);
        console.log(response.data[0]._id);
        setRole(response.data[0].role);

        switch (response.data[0].role) {
          case 'Patient':
            navigate(`/patient/${response.data[0]._id}`);
            break;
          case 'medecin':
            navigate(`/medecin/${response.data[0]._id}`);
            break;
          case 'admin':
            navigate('/admin');
            break;
          default:
            // Handle other roles or scenarios
            break;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [location.state, navigate]);

  return (
    <>
      <div className="CircularProgress">
        <CircularProgress />
      </div>
    </>
  );
};

export default Auth;
