import React from "react";
import style from "./Contact.module.css";
import contactImg from "../assets/homeImage/cupu-transformed-removebg-preview.png";

const Contact = () => {
  return (
    <div className={style["contact-container"]}>
      <div className={style["contact-form-container"]}>
        <div className={style["contact-form"]}>
          <form
            className={style["contact-message"]}
            action="https://formspree.io/f/mnqykezk"
            method="POST"
          >
            <label className={style["email-label"]}>Email</label>
            <br />
            <input
              className={style["email-input"]}
              id="email"
              name="email"
              type="email"
              placeholder="abc@gmail"
              required
            />
            <br />
            <label className={style["message-label"]}>Message</label>
            <br />
            <textarea
              className={style["message-input"]}
              id="message-input"
              rows="6"
              placeholder="message"
              required
            ></textarea>
            <button className={style["submit-button"]} id="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className={style["contact-img"]}>
          <img
            className={style["contact-coffee-img"]}
            src={contactImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
