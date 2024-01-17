import React from "react";
import {Link} from "react-router-dom"
import style from "./footer.module.css"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <div className={style["footer-upper-container"]}>
        <div className={style["footer-logo"]}>
          <h2>Logo</h2>
          <h6>SLOGAN COMPANY</h6>
        </div>
        <div className={style["footer-second"]}>
          <p>Submit a Ticket</p>
        </div>
        <div className={style["footer-fourth"]}>
          <p>Support</p>
        </div>
        <div className={style["footer-fifth"]}>
          <p>Home</p>
          <p>Products</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>

      <marquee></marquee>

      <div className={style["footer-lower"]}>
        <div className={style.icons}>
          <Link to="https://github.com/Liebe3">
          <FaGithub />
          </Link>
          <Link to="https://www.facebook.com/qweqwetikorts">
          <FaFacebook />
          </Link>
          <Link to="https://www.tiktok.com/@jaaahs2pid?is_from_webapp=1&sender_device=pc">
          <FaTiktok />
          </Link>
          <Link to="https://www.instagram.com/dyaalenzxc/" target="_blank">
          <FaInstagram />
          </Link>
          <Link to="mailto:jallenqweqwe123@gmail.com">
          <MdOutlineEmail />
          </Link>
        </div>
      </div>

      <p className={style.ownership}> ©2023 by Jallen Portugal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
