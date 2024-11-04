import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./svg/LogoSvg";

const Navbar = () => {
  const pages = [
    { path: "/", title: "Home" },
    { path: "/art", title: "Illustrations" },
    /*     { path: "/about", title: "À propos" }, */
  ];

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <ul className="menu">
        {pages.map((page) => (
          <li key={page.path}>
            <NavLink to={page.path}>{page.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
