import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AiOutlineDown, AiFillBell } from 'react-icons/ai';

import User from './User.jpg';
import Logo from './Logo.png';

import { AboutLinkLogo } from '../../components/NavBar/NavbarElement';

import './Navbar.css';

function navbar() {
  return (
    <div className="navbar">
      <div className="container-logo">
        <img className="Logo" src={Logo} alt="Logo-codemi" />
      </div>
      <div className="container-Item-Nav">
        <AboutLinkLogo className="notification">
          <AiFillBell className="iconlonceng" size={28} />
          <span className="badge">18</span>
        </AboutLinkLogo>
        <img className="User" src={User} alt="User-codemi" />
        <AboutLinkLogo>
          <AiOutlineDown className="iconpanah" size={16} />
        </AboutLinkLogo>
      </div>
    </div>
  );
}

export default navbar;
