import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import arcsteelogo from "./images/arcsteelogo.jpg";


const Navbar = () => {
  return (
    <>
      <header>
        <Link to="./">
          <img src={arcsteelogo} alt="arcstee-logo" className="arcstee-logo" />
        </Link>
        <nav className="nav">
          <ul className="list-container">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
            <li>
              <Link to="/graduates" className="links">
                Graduates
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger">HAMBURGER</div>
      </header>
      <aside className="sidebar">
        <ul className="sidebar-list-container">
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About
            </Link>
          </li>
          <li>
            <Link to="/graduates" className="links">
              Graduates
            </Link>
          </li>
          <li>
            <Link to="#" className="links">
              Developer
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;