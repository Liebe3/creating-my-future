import React from 'react'
import style from "./section.module.css"
import aboutImg from "../assets/homeImage/kupi-transformed-removebg-preview.png"

const Section = () => {
  return (
    <section className={style["about-container"]}>
  <div className={style["about-image-container"]}>
    <img className={style["about-image"]} src={aboutImg} alt=""/>
  </div>
  <div className={style.about}>
    <p className={style["about-description"]}>
      We are a team of passionate coffee enthusiasts dedicated to sharing our love of black coffee with the world. Our mission is to provide you with high-quality black coffee beans and a wealth of information about this beloved beverage.<br/>

We understand that black coffee is not just a drink, but a way of life. We know that for many people, a cup of black coffee is the perfect way to start the day or to unwind after a long day. That's why we strive to provide you with the best possible coffee experience, from the moment you place your order to the first sip of your freshly brewed cup.<br/>

Our team has carefully curated a selection of the finest black coffee beans from around the world. We believe that the best coffee comes from small, independent farmers who take pride in their craft. That's why we source our beans from farmers who are committed to sustainable and ethical farming practices.<br/>

In addition to our selection of black coffee beans, we also offer a range of brewing equipment and accessories to help you make the perfect cup of coffee. From French presses to pour-over brewers, we have everything you need to make your coffee experience even better.<br/>

At our black coffee website, we believe that coffee is not just a beverage, but a way of life. We are committed to helping you discover the joy of black coffee and to providing you with the tools you need to brew the perfect cup every time. Thank you for choosing us as your coffee partner!<br/>
    </p>
  </div>
</section>
  )
}

export default Section