import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const navStyle = {
   color: 'black',
  };
  const dec = {
    textDecoration: 'none',
  }
  return (
    <nav>
      <h2 className="title">Math magicians</h2>
      <ul>
        <li style={navStyle}>
          <Link style={dec} to="/home">
          Home |
          </Link>
        </li>
        <li style={navStyle}>       <Link style={dec} to="/calculate">Calculator |
        </Link>
        </li>
        <li style={navStyle}>
         <Link style={dec} to="/quote">Quote
         </Link>
        </li>
     </ul>
    </nav>
  );
}

export default Nav;
