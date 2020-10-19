import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {BiLogOutCircle} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import '../NavBar/NavBar'

function DropdownDays() {
  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
     <div className="drops2 opacitytext ">
      <div onClick={() => setClick(false)}  onClick={handleClick} class="row text-dark text-left mt-3 hoverdropdown  ">
        <div className="col">
            7 days
         <hr/>
        
        </div>
      </div>
      <div onClick={() => setClick(false)}  onClick={handleClick} class="row text-dark text-left mt-0 hoverdropdown">
        <div className="col-sm">
            14 days
         <hr/>
        </div>
      </div>
      <div onClick={() => setClick(false)}  class="row text-dark left mt-0 hoverdropdown ">
        <div className="col-sm">
            21 days
         <hr/>
        </div>
      </div>  
    </div>
    </>
  );
}

export default DropdownDays;
