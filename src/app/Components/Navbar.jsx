"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import Burger from "./Burger";

import Cart from "../../../public/img/cart.png";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {

  const bought = useSelector((state) => state.basket.buy); // Access the buy state

  const [open, setOpen] = useState(false);

  const basketItems = useSelector((state) => state.basket.value); // Access the basket state

  const [totalItems, setTotalItems] = useState(0);

  //use Effect to constantly calculate the total of items in my basket
  useEffect(() => {
    setTotalItems(
      basketItems.reduce(
        (total, currentValue) => (total = total + 1 * currentValue.quantity),
        0
      )
    );
  }, [basketItems]);

  const [burger, setBurger] = useState(false);

  const [links, setLinks] = useState([
    {
      name: "HOME",
      href: "/",
    },
    { name: "GALLERY", href: "/gallery" },
    { name: "OUR JELLYFISH", href: "/products" },
    { name: "CONTACT", href: "/contact" },
  ]);

  return (
    <nav className="myNav w-[100%] flex md:justify-end justify-start items-center p-6 gap-8 max-[426px]:gap-2 top-0 absolute z-20 shadow-lg">
      <div className="md:w-[20%] max-[426px]:w-[100%] flex justify-start items-center max-[426px]:gap-4">
        <button onClick={() => setBurger(!burger)}>
          <Bars3Icon className="w-[40px] h-[40px] text-white md:hidden" />
        </button>

        <Link
          href="/"
          className="text-white font-semibold text-[30px] hover:text-[#C058C6ff]"
        >
          TheJelly.
        </Link>
      </div>

      <div className="w-[80%] justify-end items-center gap-8 hidden md:flex">
        {links.map((element, id) => {
          return (
            <Link key={id}
              href={element.href}
              className={`text-[15px] text-white tracking-wider hover:text-[#C058C6ff] ${
                element.name == "OUR JELLYFISH"
                  ? "hover:bg-white border-2 border-white py-2 px-8 tracking-wider hover:font-semibold"
                  : ""
              }`}
            >
              {element.name}
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-2 w-[70px]">
        <div className={`bg-white rounded-full w-[17px] h-[17px] absolute top-5 right-20 opacity-0 ${bought ? "animate-pingPing" : ""}`}></div>
        <button onClick={() => setOpen(!open)}>
          <Image src={Cart} width={30} height={30} alt="cart" quality={100} />
        </button>
        <h1 className="text-white text-[15px] tracking-wider">
          ({totalItems})
        </h1>
      </div>

      <div
        //overflow-hidden to eliminate scroll
        className={`bg-white shadow-lg absolute h-screen right-0 top-0 overflow-hidden ${
          open ? "max-[426px]:w-[200px] md:w-[500px]" : "w-[0px]"
        } duration-700 transition-all myBurgerMenu`}
      >
        <Sidebar setOpen={setOpen} open={open} />
      </div>

      {burger ? (
        <div
          className={`absolute w-[100%] bg-white h-[300px] top-0 left-0 flex justify-center scale-y-[100%] duration-700 placeholder:transition-all mySecondBurger`}
        >
          <Burger setBurger={setBurger} burger={burger} />
        </div>
      ) : (
        <div
          className={`absolute w-[100%] bg-white h-[300px] top-0 left-0 flex justify-center scale-y-[0%] duration-700 transition-all mySecondBurger`}
        >
          <Burger setBurger={setBurger} burger={burger} />
        </div>
      )}
    </nav>
  );
}
