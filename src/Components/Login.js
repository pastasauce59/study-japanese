import React, { useState } from 'react';
import axios from "axios"
import { baseURL } from '../utils/constant';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Handle login logic (e.g., validate credentials, make API call)
    const response =  await axios.post(`${baseURL}/login`, {
      username,
      password
    })

    if (!response.data.user) {
      console.log("User cannot be logged in, User does not exist!")
    } else {
      console.log(response.data)
      console.log('Logging in with:', username, password)
      // Redirect user to the home page or a protected route
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;