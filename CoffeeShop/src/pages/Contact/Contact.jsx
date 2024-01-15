import React from "react"
import style from "./Contact.module.css"
import contact1 from "../../assets/contactImage/Calling_Monochromatic.svg";

const Contact = () => {
  return (
    <div className={style["Contact1"]}>
      <div className={style["contact-left"]}>
        <div className={style["bottom-left"]}>
            <img
              className={style["contact-img1"]}
              src={contact1}
              alt="Contact-image1"
            />
        </div>
      </div>
      <div className={style["contact-right"]}>
      <form className={style["form"]} action="https://formspree.io/f/mnqykezk" method="POST">
          <h2>Message us</h2>
          <div className={style["name-fields"]}>
          <div className={style["name"]}>
            <label>Name:</label>
            <input type="text" name="name" id="" placeholder='Enter Name'/>
          <div className={style["email"]}>
            <label>Email:</label>
            <input type="text" name="email" id="" placeholder='Enter Email'/>
          </div>
          </div>
          </div>
          <label>Subject:</label>
          <div className={style["subject"]}>
          <input type="text" name="subject" id="" placeholder='Subject'/></div>
          <div className={style["message"]}>
          <textarea placeholder="Message" value required></textarea></div>
          <button>Send Message</button>
          
      </form>
    </div>
    </div>
    
);
};

export default Contact;