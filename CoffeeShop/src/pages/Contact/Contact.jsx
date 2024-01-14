import React from "react";
import contact1 from "../assets/contactImg/Calling_Monochromatic.svg";

const Contact = () => {
  return (
    <div className={style["contact-left"]}>
      <div className={style["bottom-left"]}>
          <img
            className={style["contact-img1"]}
            src={contact1}
            alt="Contact-image1"
          />
      </div>
    </div>


);
};

export default Contact;