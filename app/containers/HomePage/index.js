/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';



export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <SideBar/>
        
        <div>
            <Home/>
        </div>
    </div>
 
  );
}
