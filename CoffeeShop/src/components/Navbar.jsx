import React from "react";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={style.logo}>
        <h4>LOGO</h4>
      </div>
      <div className={style["nav-links"]}>
        <ul className={style.mainMenu}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT US</Link>
          </li>
        </ul>
        <CiCircleRemove className={style["fa-xmark"]} />
      </div>
      <GiHamburgerMenu className={style["fa-bars"]} />
      <div className={style.search}>
        <div className={style["search-container"]}>
          <input
            type="text"
            className={style["search-bar"]}
            placeholder="Search"
          />
          <div>
            <CiSearch className={style["fa-magnifying-glass"]} size={45} />
          </div>
        </div>
        <div className={style["fa-cart-shopping-container"]}>
          <Link to="/Cart">
            <IoCartOutline className={style["fa-cart-shopping"]} size={45} />
          </Link>
          <a>
            <div className={style["add-to-cart"]}>0</div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
