import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const navStyle = {
   color: 'white',
  };
  return (
    <div>
      <nav>
        <h2 className="title">Math magicians</h2>
        <ul>
          <Link to="/">
            <li style={navStyle}>Home</li>
          </Link>
          <Link to="/calculator">
            <li className="middle" style={navStyle}>
              Calculator
            </li>
          </Link>
          <Link to="/quote">
            <li style={navStyle}>Quote</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
