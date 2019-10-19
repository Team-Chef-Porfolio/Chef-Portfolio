import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import React, { useState } from 'react';

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
        localStorage.setItem('token', res.token);
        setCredentials(defaultCredentials);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default Login;
