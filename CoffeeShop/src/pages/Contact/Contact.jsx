import React from "react"
import {Link} from "react-router-dom"
import style from "./Contact.module.css"
import contact1 from "../../assets/contactImage/Calling_Monochromatic.svg";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <main>
      <section>
      <h1>Get in touch with us today!</h1>
      </section>
    <div className={style["Contact1"]}>
      <div className={style["contact-left1"]}>
        <div className={style["bottom-left1"]}>
            <img
              className={style["contact-img1"]}
              src={contact1}
              alt="Contact-image1"
            />
        </div>
      </div>
      <div className={style["contact-right1"]}>
      <form className={style["form1"]} action="https://formspree.io/f/mnqykezk" method="POST">
          <h2>Message us</h2>
          <div className={style["name-fields1"]}>
          <div className={style["name1"]}>
            <label>Name:</label><br></br>
            <input type="text"/>
            </div>
          <div className={style["email1"]}>
            <label>Email:</label><br></br>
            <input name="email" type="email"/>
          </div>
          </div>
          <label>Subject:</label><br></br>
          <input className={style["subject1"]} type="text"></input><br></br><br></br>
          <textarea placeholder="Message" ></textarea><br></br>
          <button>Send Message</button>
          
      </form>
      </div>
    </div>
    <div className={style["footer-lower"]}>
          <div className={style["icons1"]}>
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
        <p className={style["ownership1"]}> ©2023 by Jallen Portugal. All rights reserved.</p>
    </main>
    
    
    
);
};

export default Contact;