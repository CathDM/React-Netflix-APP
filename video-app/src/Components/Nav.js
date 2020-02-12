import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {

const navStyle = {
  color:'#01d277'
};

  return (
    <div className="App">
    <nav>
   
      
       
          <img alt="app icon" width="50" src="primary-green-app.svg"/>
        
        
          
      
      
   
        
          <ul className="nav-links">
            <Link style={navStyle} to='/home'>
              <li>Home</li>
            </Link>
            <Link style={navStyle} to='/card'>
              <li>Movies</li>
            </Link>
            
            
    </ul>
    </nav>
    </div>
  );
}

export default Nav;
