import React, { useContext } from "react";
import style from "./cart.module.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, UpdateCartItems } =
    useContext(ShopContext);
  return (
    <div className={style.cartItem}>
      <img
        className={style["cart-image"]}
        src={productImage}
        alt={productName}
      />
      <div className={style.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> ₱ {price} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>
            <FaMinus />
          </button>
          <input
            className={style.input}
            value={cartItems[id]}
            onChange={(e) => UpdateCartItems(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
