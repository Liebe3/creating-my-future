import React from 'react'
import { Link } from "react-router-dom";
import style from "./backgroundimg.module.css"

const BackgroundIMG = () => {
  return (
    <div className={style.container}>
      <h1>All you need to feel better is coffee.</h1>
      <Link to="/Products"><button className={style["order-button"]}>Order Now</button></Link>
    </div>
  )
}

export default BackgroundIMG