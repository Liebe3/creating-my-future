import React from "react";
import Maincomponents from "../../components/Maincomponents";
import BackgroundIMG from "../../components/BackgroundIMG";
import style from "./home.module.css"
const Home = () => {
  return (
    <div>
      <div className={style.header}>
        <BackgroundIMG />
      </div>
      <Maincomponents />
    </div>
  );
};

export default Home;
