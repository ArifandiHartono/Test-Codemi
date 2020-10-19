import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { AiOutlineDown, AiFillBell } from 'react-icons/ai';
import User from './User.jpg';
import Logo from './Logo.png';
import Dropdown from'../Dropdown/Dropdown';
import { AboutLinkLogo } from '../../components/NavBar/NavbarElement';

import './Navbar.css';

function navbar() {

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div  className="navbar">
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
          <AiOutlineDown  className='nav-item'
            onClick={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="iconpanah" size={16} />
          {dropdown && <Dropdown></Dropdown>}
        </AboutLinkLogo >
      </div>
    </div >
  );
}




export default navbar;
