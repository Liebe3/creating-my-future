import React from 'react'
import { Link } from "react-router-dom";
import style from "./backgroundimg.module.css"

const BackgroundIMG = () => {
  return (
    <div className={style.container}>
      <h1>All you need to feel better is coffee.</h1>
      <div><button className={style["order-button"]}>Order Now</button></div>
    </div>
  )
}

export default BackgroundIMG