import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';

const RegisterChef = () => {
  const defaultChef = {
    username: '',
    password: '',
    email: '',
    location: ''
  };

  const [chef, setChef] = useState(defaultChef);

  const handleChange = (e) => {
    setChef({ ...chef, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuthenticate()
      .post('/auth/register/', chef)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);

  // SETS ID IN LOCAL STORAGE FOR REFERENCE TO ALLOW TESTING OTHER COMPONENTS. NOT INTENDED TO BE PRODUCTION SOLUTION 
        
        setChef(defaultChef);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={chef.username}
        onChange={handleChange}
        placeholder='Name'
      />

      <input
        type='password'
        name='password'
        value={chef.password}
        onChange={handleChange}
        placeholder='Password'
      />

      <input
        type='email'
        name='email'
        value={chef.email}
        onChange={handleChange}
        placeholder='Email'
      />

      <input
        type='text'
        name='location'
        value={chef.location}
        onChange={handleChange}
        placeholder='City, State'
      />

      <button type='submit'>Create Profile</button>
    </form>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default RegisterChef;

