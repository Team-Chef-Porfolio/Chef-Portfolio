import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import styled from 'styled-components';

const RegDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 0;
  width: 275px;
  h1 {
    margin-top: 45px;
    font-weight: 900;
    font-size: 2.4rem;
    width: 600px;
    letter-spacing: .4rem;
    color: #fa9600;
  }
  form {
    display: flex;
    flex-direction: column;

    li {
      list-style-type: none;
      p {
        height: 5;
        font-size: 1.4rem;
        color: #636363;
        font-weight: 300;
        padding: 0;
        margin: 0 0 25px 0;
      }
      input {
        margin-bottom: 30px;
        background-color: none;
        height: 65px;
        max-width: 740px;
        width: 100%;
        border: solid 1px #636363;
        border-radius: 10px;
      }
    }
    button {
      background-color: #fa9600;
      width: 270px;
      height: 70px;
      align-self: flex-end;
      margin-top: 0;
      font-size: 1.8rem;
      letter-spacing: 0.3rem;
      font-weight: 300;
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
        localStorage.setItem('username', res.data.username);
        
        setChef(defaultChef);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    
    <RegDiv>
    <h1>Create an Account</h1>
      <form autoComplete='new-password' onSubmit={handleSubmit}>
        <li>
          <p>Name</p>
          <input
            type='text'
            name='username'
            value={chef.username}
            onChange={handleChange}
            className='inputField'
          />
        </li>

        <li>
          <p>Email</p>
          <input
            type='email'
            name='email'
            value={chef.email}
            onChange={handleChange}
            className='inputField'
          />
        </li>

        <li>
          <p>Password</p>
          <input
            type='password'
            name='password'
            value={chef.password}
            onChange={handleChange}
            className='inputField'
          />
        </li>

        <li>
          <p>Location</p>
          <input
            type='text'
            name='location'
            value={chef.location}
            onChange={handleChange}
            className='inputField'
          />
        </li>

        <button type='submit'>Join Now</button>
      </form>
    </RegDiv>
    </>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default RegisterChef;
