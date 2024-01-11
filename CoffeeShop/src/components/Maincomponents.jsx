import React from "react";
import coffee1 from "../assets/homeImage/coffee1-transformed.jpeg";
import coffee2 from "../assets/homeImage/coffee2-transformed.jpeg";
import coffee3 from "../assets/homeImage/coffee4-transformed.jpeg";
import style from "./maincomponents.module.css";
import { Link } from "react-router-dom";

const Maincomponents = () => {
  return (
    <main>
      <h1 className={style.products}>Product</h1>
      <div className={style["product-container"]}>
        <div className={style.coffee}>
          <img
            className={style["coffee-img"]}
            src={coffee1}
            alt="Coffee1-image"
          />
          <h2 className={style["coffee-name"]}>Espresso</h2>
          <div className={style.class}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis iusto nam atque ut! Quo rem quidem voluptatibus rerum
              minima exercitationem non ipsa quod alias, laudantium doloribus
              adipisci ea saepe animi.
            </p>
          </div>
          <Link to="/Products">
            <button className={style["buy-btn"]}>Buy Now</button>
          </Link>
        </div>
        <div className={style.coffee}>
          <img
            className={style["coffee-img1"]}
            src={coffee2}
            alt="Coffee2-image"
          />
          <h2 className={style["coffee-name"]}>Americano</h2>
          <div className={style.class}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis iusto nam atque ut! Quo rem quidem voluptatibus rerum
              minima exercitationem non ipsa quod alias, laudantium doloribus
              adipisci ea saepe animi.
            </p>
          </div>
          <Link to="/Products">
            <button className={style["buy-btn"]}>Buy Now</button>
          </Link>
        </div>
        <div className={style.coffee}>
          <img
            className={style["coffee-img"]}
            src={coffee3}
            alt="Coffee3-image"
          />
          <h2 className={style["coffee-name"]}>Aeropress</h2>
          <div className={style.class}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis iusto nam atque ut! Quo rem quidem voluptatibus rerum
              minima exercitationem non ipsa quod alias, laudantium doloribus
              adipisci ea saepe animi.
            </p>
          </div>
          <Link to="/Products">
            <button className={style["buy-btn"]}>Buy Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Maincomponents;
