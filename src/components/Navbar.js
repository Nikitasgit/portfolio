import React from "react";
import soundHover from "../assets/sounds/sound-2.wav";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  let play = () => {
    new Audio(soundHover).play();
  };
  const location = useLocation();

  return (
    <div>
      <ul className="navbar">
        <NavLink to="/">
          <li
            onMouseOver={play}
            className={location.pathname === "/" ? "on-page" : ""}
          >
            Home
          </li>
        </NavLink>
        <NavLink to="/art">
          <li
            onMouseOver={play}
            className={location.pathname === "/art" ? "on-page" : ""}
          >
            Art Gallery
          </li>
        </NavLink>
        <NavLink to="/about">
          <li
            onMouseOver={play}
            className={location.pathname === "/about" ? "on-page" : ""}
          >
            About me
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
