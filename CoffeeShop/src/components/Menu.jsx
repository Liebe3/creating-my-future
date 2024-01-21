import React from "react";
<link rel="stylesheet" href="coffeestyle.css"></link>

import img1 from "../assets/coffee/coffee1.jpg";
import img2 from "../assets/coffee/coffee2.jpg";
import img3 from "../assets/coffee/coffee3.jpg";
import img4 from "../assets/coffee/coffee4.jpg";
import img5 from "../assets/coffee/coffee5.jpg";
import MenuList from "../components/MenuList";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Finest Selections
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        
        <MenuList img={img1} title="Americano" />
        
        <MenuList img={img2} title="Macchiato" />
        
        <MenuList img={img3} title="Espresso" />
        
        <MenuList img={img4} title="Latte" />
        
        <MenuList img={img5} title="Cappucino" />
        
      </div>
    </div>
  );
};

export default Menu;