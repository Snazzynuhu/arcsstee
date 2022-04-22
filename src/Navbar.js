import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import arcsteelogo from "./images/arcsteelogo.jpg";
import { FaTimes, FaBars } from "react-icons/fa";



const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const slideSidebar=()=>{
    setShowSidebar(!showSidebar);
  }
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
        <div className="hamburger" onClick={slideSidebar}>
          {showSidebar ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </div>
      </header>

      <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <ul className="sidebar-list-container">
          <li>
            <Link to="/" className="list">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="list">
              about
            </Link>
          </li>
          <li>
            <Link to="/graduates" className="list">
              graduates
            </Link>
          </li>
          <li>
            <a
              href="https://harunanuhu-portfolio.netlify.app/"
              target="_blank"
              className="list"
            >
              contact developer
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;