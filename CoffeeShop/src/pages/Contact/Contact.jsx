import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3x1 text-center text-pink-600 font-bold mb-6">Contact Us</h2>
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
          <input placeholder="Type your message here..." className="Mess" required type="text"/>
        </div>
      </form>
    </div>
  )
}

export default Contact