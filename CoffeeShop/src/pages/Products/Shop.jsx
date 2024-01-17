import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./products.module.css";
import { PRODUCTS } from "../../Product";
import Product from "./Product";

const Shop = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${style.nextArrow}`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#B85C38",
          position: "absolute",
          opacity: "opacity: 0.8",
          top: "50%",
          right: 30,
          transform: "translateY(-50%)",
          padding: "20px 20px",
          borderRadius: "3px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${style.prevArrow}`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#B85C38",
          position: "absolute",
          zIndex: 10,
          opacity: "opacity: 0.8",
          top: "50%",
          left: 30,
          transform: "translateY(-50%)",
          padding: "20px 20px",
          borderRadius: "3px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={style.coffee}>
        <h1>C O F F E E </h1>
      </div>

      <Slider  className={style.slider} {...settings}>
        {PRODUCTS.map((product) => (
          <Product data = {product} />
        ))}
      </Slider>
    </div>
  );
};

export default Shop;
