import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./svg/LogoSvg";

const Navbar = () => {
  const location = useLocation();
  const [pages, setPages] = useState([
    { path: "/", title: "Développeur", className: "" },
    { path: "/art", title: "Illustrations", className: "" },
    /* { path: "/about", title: "À propos" }, */
  ]);
  useEffect(() => {
    setPages((prevPages) =>
      prevPages.map((page) => ({
        ...page,
        className: page.path === location.pathname ? "on-page" : "",
      }))
    );
  }, [location.pathname]);

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <ul className="menu">
        {pages.map((page) => (
          <li className={page.className} key={page.path}>
            <NavLink to={page.path}>{page.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
