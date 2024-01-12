import React from "react";
import { useState } from "react";
import style from "./Contact.module.css";

const Contact = () => {
  const[data, setData] =useState({name:"", email:"", phone:"", message:""});
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(data)
  }
  return (
    <form method='submit' onSubmit={handleSubmit}>
      <h8>Contact <span>Us</span></h8>
      <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Your Name'/>
      <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='Your E-mail'/>
      <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='+639'/>
      <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='Type Here...'/>
      <button type='submit'>Enter</button>
      <p>{data.name} {data.email} {data.phone} {data.message}</p>
    </form>


  )
}

export default Contact;