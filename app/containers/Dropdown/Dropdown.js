import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {BiLogOutCircle} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import '../NavBar/NavBar'

function Dropdown() {
  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
     <div className="drops opacitytext ">
      <div onClick={() => setClick(false)}  onClick={handleClick} class="row text-dark text-left mt-3 hoverdropdown  ">
        <div className="col">
        <CgProfile className="mr-2 ml-2" size={21} /> My Profile
         <hr/>
        
        </div>
      </div>
      <div onClick={() => setClick(false)}  onClick={handleClick} class="row text-dark text-left mt-0 hoverdropdown">
        <div className="col-sm">
        <FiSettings className="mr-2 ml-2" size={21} /> Setting
         <hr/>
        </div>
      </div>
      <div onClick={() => setClick(false)}  class="row text-dark left mt-0 hoverdropdown ">
        <div className="col-sm">
        <BiLogOutCircle className="mr-2 ml-2" size={21} /> Logout
         <hr/>
        </div>
      </div>  
    </div>
    </>
  );
}

export default Dropdown;
