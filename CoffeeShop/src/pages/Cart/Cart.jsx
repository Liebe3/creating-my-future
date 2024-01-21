import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/ShopContextProvider";
import style from "./cart.module.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount, clearAll } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const [isConfirmed, setIsConfirmed] = useState("");

  const cartIsEmpty = () => {
    // Check if all items in the cart are zero
    return Object.values(cartItems).every((quantity) => quantity === 0);
  };

  const handleCheckout = () => {
    if (cartIsEmpty()) {
      // Display message if cart is empty
      setIsConfirmed("Please order items first.");
    } else {
      // Show confirmation message
      setIsConfirmed("Order Confirm?");
    }
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      clearAll();
      // setIsConfirmed(`Your order number is ${orderNumber}`);
    } else {
      setIsConfirmed(""); // Clear the confirmation message on cancel
    }
  };

  return (
    <div className={style.cart}>
      <div className={style["cart-section"]}>
        <h1>Coffee You Ordered</h1>
      </div>
      <div className={style["cart-items"]}>
        {PRODUCTS.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>
      <div className={style.checkout}>
        <p className={style.total}>
          <b> Subtotal: ₱ {totalAmount}</b>
        </p>
        <div className={style["button-container"]}>
          <button
            className={style.buttons}
            onClick={() => navigate("/Products")}
          >
            Continue Ordering
          </button>
          <button className={style.buttons} onClick={handleCheckout}>
            Proceed to Payment
          </button>
          {isConfirmed && (
            <div className={style.validation}>
              <div className={style.confirm}>
                <p>{isConfirmed}</p>
                {!cartIsEmpty() && (
                  <div>
                    <button
                      className={style.success}
                      onClick={() => {
                        handleConfirmation(true);
                        navigate("/OrderNumber");
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={style.delete}
                      onClick={() => handleConfirmation(false)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
