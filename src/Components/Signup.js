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
    // Send a POST request to your backend signup route
    const response = await axios.post(`${baseURL}/register`, {
      username,
      password,
      mistakes: []
    });

    if (response.data.status == 'error'){
      // console.log(response.data)
      setErrMsg(response.data.error)
    } else {
      console.log("User created successfully:", response.data)
      props.setUser({
        username: response.data.username,
        mistakes: response.data.mistakes
      })
    }
      // Redirect user to the home page or a protected route
    navigate('/user_session')
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => ( setUsername(e.target.value), setErrMsg(false) )}
        />
        {errMsg != false ? <div>{errMsg}</div> : null}
        <input
          type="password"
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