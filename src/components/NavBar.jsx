import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="main-nav" data-aos="fade-down">
        <div className="nav-brand">
          <span className="highlight">K</span>
          umar!
        </div>
        <button className="menu-btn" id="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div>
          <ul className="nav-links" id="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills-arsenal">Tech Armory</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;
