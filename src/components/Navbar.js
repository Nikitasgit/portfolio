import React, { useCallback, useEffect, useRef } from "react";
import soundHover from "../assets/sounds/sound-2.wav";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const pages = [
    { path: "/", title: "Home" },
    { path: "/art", title: "Illustrations" },
    { path: "/about", title: "À propos" },
  ];
  const navbarRef = useRef(null);
  const location = useLocation();
  let playSound = () => {
    new Audio(soundHover).play();
  };
  const removeClasses = useCallback(() => {
    let children = Array.from(navbarRef.current.children);
    children.forEach((child) => {
      child.classList.remove("on-page");
      const urlObject = new URL(child.href);

      if (urlObject.pathname === location.pathname) {
        child.classList.add("on-page");
      }
    });
  }, [location.pathname]);
  useEffect(() => {
    removeClasses();
  }, [removeClasses]);
  let play = (event) => {
    let children = Array.from(navbarRef.current.children);
    children.forEach((child) => {
      child.classList.remove("on-page");
    });
    event.target.classList.add("on-page");
  };

  return (
    <div className="navbar" ref={navbarRef}>
      {pages.map((page) => (
        <NavLink
          to={page.path}
          key={page.path}
          onMouseEnter={play}
          onClick={playSound}
          onMouseOut={removeClasses}
        >
          {page.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
