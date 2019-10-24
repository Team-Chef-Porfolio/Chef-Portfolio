import React from 'react';
//import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  console.log('props from Navbar', props);

  return (
    <div className='Navbar-bar'>
      <div className='logo'>
        <h1>STASH</h1>
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
        <img src='https://image.flaticon.com/icons/svg/61/61088.svg' style={{width:'25px',height: '24px',padding:'40px 4px 4px 4px'}}alt='icon' />
        <img style={{width:'25px', padding:'28px 4px 4px 20px',}} src='https://image.flaticon.com/icons/svg/44/44948.svg' alt='icon' />

      </div>
    </div>
  );
}

export default NavBar;
