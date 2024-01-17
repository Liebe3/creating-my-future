import React from "react";
import style from "./productsdata.module.css";

const ProductsData = (props) => {
  // const { id, productImage, productName, price } = props.data;
  // console.log(productName)
  return (
    <div className={style.card}>
      {/* <div className={style["image-container"]}>
        <img
          className={style["paper-coffee"]}
          src={productImage}
          alt={productName}
        />
        <h2>{productName}</h2>
      </div>
      <div className={style.category}>
        <h3>₱ {price}</h3>
        <div className={style["order-buttons"]}>
          <button>add to cart</button>
        </div>
      </div> */}
    </div>
  );
};

export default ProductsData;
