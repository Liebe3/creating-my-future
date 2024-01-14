// Singit mo nlang to len doon sa footer
import React from 'react'
import style from ""

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
          <p className=" text-sm">
            Introducing -Shop Name- Enjoy quality time with us, your favorite people and love ones and coffee
            here you can relax, and chill. Let out some steam and spark or spark some creativity
          </p>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Link</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
          

          </nav>
        </div>
        <div>