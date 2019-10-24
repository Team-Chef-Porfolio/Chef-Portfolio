import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const defaultCredentials = {
    username: '',
    password: ''
  };

  const [credentials, setCredentials] = useState(defaultCredentials);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axiosAuthenticate()
      .post('auth/login', credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        setCredentials(defaultCredentials);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="FormContainer">
      <form className="Form" onSubmit={login}>
      <label htmlFor="UserName">Username</label>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="Password">Password</label>
        <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button type='submit'>Sign In</button>
      </form>
      
    </div>
  );
};

export default Login;
