import React from "react";
import Maincomponents from "../../components/Maincomponents";
import BackgroundIMG from "../../components/BackgroundIMG";
import style from "./home.module.css";
import Aboutheader from "../../components/Aboutheader";
import Section from "../../components/Section";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const Home = () => {
  const Contactstyle = {
    textAlign: "center",
    backgroundColor: "#B85C38",
    color: "#FFF3E4",
    letterSpacing: "10px",
  };

  return (
    <div>
      <div className={style.header}>
        <BackgroundIMG />
      </div>
      <Maincomponents />
      <Aboutheader />
      <Section />
      <h1 style={Contactstyle}>Contact</h1>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
