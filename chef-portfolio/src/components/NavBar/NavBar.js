import React from 'react';
//import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';





function NavBar (){
    
    
    return (
        <div className="Navbar-bar">
                <div className="logo">
                     <h1>Logo</h1>  
                 </div>
        <div className="NavBar">
            
            <div className="link">
                <Link to="/" >Account</Link>
            </div>
            <div className="link">
                <Link to="/" >PortFolio</Link>
            </div >
            <div className="link">
                <Link to="/" >About</Link>
            </div>
            <div className="link">
                <Link to="/" >Support</Link>
            </div>
            
        </div>
        
         </div>       
    );
};

export default NavBar;