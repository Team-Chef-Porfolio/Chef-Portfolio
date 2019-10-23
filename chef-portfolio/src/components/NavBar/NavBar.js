import React from 'react';
//import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  console.log('props from Navbar', props);

  return (
    <div className='Navbar-bar'>
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      <div className='NavBar'>
        <div className='link'>
          <Link to='/login'>Login</Link>
        </div>
        <div className='link'>
          <Link to='/account'>Account</Link>
        </div>
        <div className='link'>
          <Link to='/portfolio'>PortFolio</Link>
        </div>
        <div className='link'>
          <Link to='/about'>About</Link>
        </div>
        <div className='link'>
          <Link to='/registerchef'>Register</Link>
        </div>
        <div className='link'>
          <Link to='/support'>Support</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
