import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.png';

import './Navbar.css'

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar_nav">

      <div className="navbar_logo">
        <a href="/"><img className="navbar_img-log" img src={Logo} />DEMO</a>
      </div>

      <div className="navbar_nav-items">
        <ul>
          <li><Link to='/sent'>SENT</Link></li>
          <li><Link to='/Send'>SEND</Link></li>
        </ul>
      </div>

    </nav>
  </header>
)

export default Navbar;
