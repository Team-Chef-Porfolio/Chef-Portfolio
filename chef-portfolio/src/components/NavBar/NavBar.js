import React from 'react';
//import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  console.log('props from Navbar', props);

  return (
    <div className='Navbar-bar'>
        <a href='https://eager-goldberg-6042bb.netlify.com/'>
        <h1 className='logo'>STASH</h1>
      </a>
      <div className='NavBar'>
        <div className='link'>
          <Link to='/login'>Login</Link>
        </div>
        {/* <div className='link'>
          <Link to='/account'>Account</Link>
        </div> */}
        <div className='link'>
          <Link to='/portfolio'>Portfolio</Link>
        </div>
        <div className='link'>
          <a href='https://eager-goldberg-6042bb.netlify.com/secondpage.html'>About</a>
        </div>
        <div className='link'>
          <Link to='/registerchef'>Register</Link>
        </div>
        <div className='link'>
          <Link to='/support'>Support</Link>
        </div>
        <Link to='/'>
          <img src='https://image.flaticon.com/icons/svg/61/61088.svg' id="srch-icon" alt='icon' />
        </Link>
        <img className="icon-img" src='https://image.flaticon.com/icons/svg/44/44948.svg' id="head-icon" alt='icon' />

      </div>
    </div>
  );
}

export default NavBar;


// <img src='https://image.flaticon.com/icons/svg/61/61088.svg' style={{width:'25px',height: '24px',padding:'40px 4px 4px 4px'}}alt='icon' />
//         <img style={{width:'25px', padding:'28px 4px 4px 20px',}} src='https://image.flaticon.com/icons/svg/44/44948.svg' alt='icon' />