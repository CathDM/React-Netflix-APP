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
    <table>
      
        <td>
          <img alt="app icon" width="50" src="primary-green-app.svg"/>
        </td>
        <td>
          <h3>MovieDB</h3>
        </td>
      
    </table>
        
          <ul className="nav-links">
            <Link style={navStyle} to='/about'>
              <li>About</li>
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
