import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const[click, setClick] =useState(false)

  const handleClick = () => setClick(!click)
  return (
    <nav className="navbar-conatainer">
      <div className="logo">Wajid Kashoo</div>

      


      <div className={`${click  ? 'active-menu' : 'nav-links'}`}>
        <ul>'
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
        </ul>
        <div className="social-container">
        <ul>
          <Link className="social-link" to="/">
          < i class="fa-brands fa-facebook" />
          </Link>
          <Link className="social-link" to="/">
          <i class="fa-brands fa-instagram" />
          </Link>
          <Link className="social-link" to="/">
          <i class="fa-brands fa-twitter"/>
          </Link>
        </ul>
      </div>
      
      </div>
      <Button buttonStyle="btn-primary">download</Button>
      <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

     

    </nav>
  );
};

export default Navbar;
