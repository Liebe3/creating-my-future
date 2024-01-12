import React from 'react'
import style from "./Contact.css";

const Contact = () => {
  return (
    <div className={style.contacts}>
      <h3>Contact Us</h3>
      <form action="">
        <div className={style.name}>
          <label className="FullName" htmlFor="">Your Name</label>
          <input placeholder="John Wick" required type="text"/>
        </div>
        <div className={style.email}>
        <label className="Email" htmlFor="">Your Email</label>
          <input placeholder="john@gmail.com" required type="text"/>
        </div>
        <div className={style.message}>
        <label className="Message" htmlFor=""> Your Message</label>
          <textarea rows='4' cols={60} placeholder="Type your message here..." required type="text"/>
        </div>
        <div className={style["submit-button"]}>
          <button type="submit" className="enter">
            Send Message
          </button>
        </div>
      </form>

    </div>
  )
}

export default Contact