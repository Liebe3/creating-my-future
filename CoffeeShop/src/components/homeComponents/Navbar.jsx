import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { ShopContext } from "../../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";

import style from "./navbar.module.css";

const Navbar = () => {
  const { getTotalCart } = useContext(ShopContext);
  const cartTotal = getTotalCart();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("no-scroll");
    setIsMenuOpen(true);
    console.log("open");
  };

  const closeMenu = () => {
    document.body.classList.remove("no-scroll");
    setIsMenuOpen(false);
    console.log("close");
  };

  const handleScreenWidth = () => {
    if (window.innerWidth < 800) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  return (
    <nav>
      <div className={style.logo} id="logo">
        <h4>LOGO</h4>
      </div>
      <div
        className={`${style["nav-links"]} ${isMenuOpen ? style.open : ""}`}
        id="nav-links"
      >
        <ul className={style.mainMenu}>
          <li>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li>
            <Link to="/Products" onClick={closeMenu}>PRODUCTS</Link>
          </li>
          <li>
            <Link to="/About" onClick={closeMenu}>ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={closeMenu}>CONTACT US</Link>
          </li>
        </ul>
        <CiCircleRemove className={style["fa-xmark"]} onClick={closeMenu} />
      </div>
      <GiHamburgerMenu className={style["fa-bars"]} onClick={openMenu} />
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
          <Link to="/Cart" className={style["your-link-class"]}>
            <IoCartOutline className={style["fa-cart-shopping"]} size={40} />
          </Link>
          <div
            onClick={() => navigate("/Cart")}
            className={style["add-to-cart"]}
          >
            {cartTotal}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
