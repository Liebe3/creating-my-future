import React from 'react'

const Contact = () => {
  return (
    <div className="Contacts">
      <h2>Contact Us</h2>
      <form action="">
        <div className="mb-4">
          <label className="FullName" htmlFor="">Your Name</label>
          <input placeholder="John Wick" className="Name" required type="text"/>
        </div>
        <div className="mb-4">
        <label className="Email" htmlFor="">Your Email</label>
          <input placeholder="john@gmail.com" className="E-mail" required type="text"/>
        </div>
        <div className="mb-4">
        <label className="Message" htmlFor=""> Your Message</label>
          <textarea rows='4' placeholder="Type your message here..." className="Mess" required type="text"/>
        </div>
        <div className="button-contact">
          <button type="submit" className="enter">
            Send Message
          </button>
        </div>
      </form>

    </div>
  )
}

export default Contact