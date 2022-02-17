import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-conatainer">
      <div className="logo">Wajid Kashoo</div>

      <div className="nav-links">
        <ul>
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
      </div>
      <Button buttonStyle="btn-primary">download</Button>
    </nav>
  );
};

export default Navbar;
