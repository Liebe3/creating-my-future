import React, { useState, useEffect } from "react";
import style from "./ordernumber.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const Ordernumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const generateRandomNumber = () => {
    // Simulate a delay of 1 second
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      setRandomNumber(randomNum);
      setLoading(false); // Set loading to false when the number is generated
    }, 1000);
  };

  // Call generateRandomNumber when the component mounts
  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <div className={style["order-container"]}>
      <div className={style.order}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <b>
            <p>Your Order number is {randomNumber}</p>
          </b>
        )}
        <button onClick={() => navigate("/Products")} className={style["order-again"]}>Order Again</button>
      </div>
    </div>
  );
};

export default Ordernumber;
