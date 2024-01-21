import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/ShopContextProvider";
import style from "./cart.module.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className={style.cart}>
      <div className={style["cart-section"]}>
        <h1>Coffee You Ordered</h1>
      </div>
      <div className={style["cart-items"]}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      <div className={style.checkout}>
        <p className={style.total}>
          <b> Subtotal: ₱ {totalAmount}</b>
        </p>
        <div className={style.buttons}>
          <button onClick={() => navigate("/Products")}>
            Continue Ordering
          </button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
