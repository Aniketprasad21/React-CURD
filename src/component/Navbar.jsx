import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <aside className={style.logo}>🍕</aside>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Createuser</Link>
          </li>
          <li>
            <Link to="/alluser">Alluser</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
