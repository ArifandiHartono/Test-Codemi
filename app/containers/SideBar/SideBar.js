import React from 'react';
import './Sidebar.css';
import { GrDiamond } from 'react-icons/gr';
import {
  FaUsb,
  FaUserAlt,
  FaChartArea,
  FaChartLine,
  FaBullhorn,
  FaStarHalfAlt,
  FaInfoCircle,
} from 'react-icons/fa';

import { BsGearWide } from 'react-icons/bs';

import { HiOutlineMail } from 'react-icons/hi';

import {
  MenuUtama,
  MenuDalam,
  rectangle,
} from '../../components/SideBarComponents/SIdeBarComponents.js';

function navbar() {
  return (
    <div>
      <div className="sidebar">
        <span className="brlarge" />
        <MenuUtama className="active" href="#home">
          HOME
        </MenuUtama>
        <hr className="new4" />

        <MenuUtama href="#news">LEARNING</MenuUtama>
        <MenuDalam href="#news" className="notification2">
          <GrDiamond className="icon" size={21} />
          Courses
          <span className="badge">21</span>
        </MenuDalam>
        <MenuDalam href="#news">
          <FaUsb className="icon" size={21} /> Learning plans
        </MenuDalam>

        <hr className="new4" />

        <MenuUtama href="#contact">MANAGE</MenuUtama>
        <MenuDalam href="#news">
          <FaUserAlt className="icon" size={20} />
          Users
        </MenuDalam>
        <MenuDalam href="#news">
          <BsGearWide className="icon" size={21} />
          Skill
        </MenuDalam>
        <MenuDalam href="#news">
          <FaChartArea className="icon" size={21} />
          Reports
        </MenuDalam>
        <MenuDalam href="#news">
          <FaChartLine className="icon" size={21} />
          Analytics
        </MenuDalam>
        <MenuDalam href="#news">
          <FaBullhorn className="icon" size={21} />
          Announcements
        </MenuDalam>

        <hr className="new4" />

        <MenuUtama href="#about">COURSE</MenuUtama>
        <MenuDalam href="#news">
          <FaStarHalfAlt className="icon" size={21} />
          Points
        </MenuDalam>
        <MenuDalam href="#news">
          <BsGearWide className="icon" size={21} />
          Rewards
        </MenuDalam>
        <MenuDalam href="#news">
          <HiOutlineMail className="icon" size={21} />
          Email Tempelates
        </MenuDalam>
        <MenuDalam href="#news">
          <FaInfoCircle className="icon" size={21} />
          Company Info
        </MenuDalam>
        <MenuDalam href="#news">
          <FaUserAlt className="icon" size={20} />
          Billings
        </MenuDalam>
      </div>

      <hr className="new4" />
    </div>
  );
}

export default navbar;
