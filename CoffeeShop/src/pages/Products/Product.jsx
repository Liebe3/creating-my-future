import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import style from "./products.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className={style.product}>
      <div className={style["image-container"]}>
        <img
          className={style["paper-coffee"]}
          src={productImage}
          alt={productName}
        />
        <h2>{productName}</h2>
      </div>
      <div className={style["category"]}>
        <h3>₱ {price}</h3>
        <div className={style["order-buttons"]}>
          <button onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
