import React from 'react'
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <h3>Contact <span>Us</span></h3>
      <form action="">
        <div className={style.info}>
          <label className="FullName" htmlFor=""></label>
          <input placeholder="John Wick" required type="text"/>
        </div>
        <div className={style.info}>
        <label className="Email" htmlFor=""></label>
          <input placeholder="john@gmail.com"  required type="text"/>
        </div>
        <div className={style.info}>
        <label className="Phone" htmlFor=""></label>
          <input placeholder="+639..."  required type="text"/>
        </div>
        <div className={style.message}>
        <label className="Message" htmlFor=""></label>
          <textarea rows='4' placeholder="Type your message here..." required type="text"/>
        </div>
        <button id="submit-button" className={style["submit-button"]}>
              Submit
            </button>
      </form>

    </div>
  )
}

export default Contact