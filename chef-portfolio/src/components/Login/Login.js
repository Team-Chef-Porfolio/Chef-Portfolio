import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import React, { useState } from 'react';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axiosAuthenticate()
      .post('/login', credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        props.history.push('/auth/login/');
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
