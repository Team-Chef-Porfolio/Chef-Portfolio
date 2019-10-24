import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import styled from 'styled-components';

const RegButton = styled.button`

background-color: #FA9600;
font-size: 1.5rem;


`

const RegDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px auto;
  width: 275px;

  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 10px;
      background-color: #CFF99D;
    }
  }
`;

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
    <RegDiv>
      <form autoComplete='new-password' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={chef.username}
          onChange={handleChange}
          placeholder='Name'
          className='inputField'
        />

        <input
          type='password'
          name='password'
          value={chef.password}
          onChange={handleChange}
          placeholder='Password'
          className='inputField'
        />

        <input
          type='email'
          name='email'
          value={chef.email}
          onChange={handleChange}
          placeholder='Email'
          className='inputField'
        />

        <input
          type='text'
          name='location'
          value={chef.location}
          onChange={handleChange}
          placeholder='City, State'
          className='inputField'
        />

        <RegButton type='submit'>Create Profile</RegButton>
      </form>
    </RegDiv>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default RegisterChef;
