import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

import "./Navbar.css";

const Navbar = () => {
  const[click, setClick] =useState(false)

  const handleClick = () => setClick(!click)
  return (
    <nav className="navbar-conatainer">
      <div className="logo">Wajid Kashoo</div>

      


      <div className={`${click  ? 'active-menu' : 'nav-links'}`}>
        <ul className="list-container">'
          <li>
            <Link className="nav-link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              project
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              contact
            </Link>
          </li>
          <div className="social-container">
            <ul className="social-icons">
            <FaFacebookF />

            <FiInstagram/>

            <BsTwitter/>

            
              
        </ul>
      </div>
          
        </ul>

       
      
      </div>
     
      <Button buttonStyle="btn-primary">download</Button>
      <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

     

    </nav>
  );
};

export default Navbar;
