import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Send a POST request to backend signup route
    const response = await axios.post(`${baseURL}/register`, {
      username,
      password,
      mistakes: []
    });

    if (response.data.status == 'error'){
      setErrMsg(response.data.error)
    } else {
      console.log("User created successfully.")
      alert(`Registration successful, ${response.data.username}! Proceed to login to access your account.`)
    }
      // Redirect user to the home page or a protected route
    navigate('/login')
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          id="username"
          name="username"
          required
          minLength="6"
          maxLength="16"
          placeholder="Username"
          value={username}
          onChange={(e) => ( setUsername(e.target.value), setErrMsg(false) )}
        />
        {errMsg != false ? <div>{errMsg}</div> : null}
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength="6"
          maxLength="16"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;