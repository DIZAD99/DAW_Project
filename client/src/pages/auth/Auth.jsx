import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'
import './Auth.css'

const Auth = () => {
    const location = useLocation()
    const [email, setemail] = useState(null)

    const emailVal = {
        email: location.state || {}
    }
    axios.post('http://localhost:5000/utilisateur/who', emailVal)
        .then(res => {
            console.log(res.data[0].role)
            setemail(res.data[0].role)
        })
        .catch(error => console.log('Error:', error))


    switch (email) {
        case 'Patinet':
            window.location = '/contact'
            break;
        case 'medecin':
            window.location = '/about'
            break;
        default:
            console.log('nothing')
            break;
    }

    return (
        <>
            <div className="CircularProgress">
                <CircularProgress />
            </div>
        </>
    )
}

export default Auth;
