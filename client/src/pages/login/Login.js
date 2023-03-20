import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setisLoggedIn } = useAuth();


  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response.data);
      navigate('/');
      setisLoggedIn(true);
    })
    .catch(error => {
      console.error(error);
      console.error('Authentication failed:', error.message);
    });
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
