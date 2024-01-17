import React from "react";
import Maincomponents from "../../components/homeComponents/Maincomponents";
import BackgroundIMG from "../../components/homeComponents/BackgroundIMG";
import style from "./home.module.css";
import Aboutheader from "../../components/homeComponents/Aboutheader";
import Section from "../../components/homeComponents/Section";
import Contact from "../../components/homeComponents/Contact";
import Footer from "../../components/homeComponents/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
