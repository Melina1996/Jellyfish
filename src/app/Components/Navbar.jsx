"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Sidebar from "./Sidebar";

import Cart from "../../../public/img/cart.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const basketItems = useSelector((state) => state.basket.value); // Access the counter state

  const[totalItems,setTotalItems]=useState(0)

  //use Effect to constantly calculate the total of items in my basket
  useEffect(() => {
    setTotalItems(basketItems.reduce(
      (total, currentValue) => (total = total + 1 * currentValue.quantity),
      0
    ));
  }, [basketItems]);

  return (
    <nav className="myNav w-[100%] flex justify-end items-center p-6 gap-8 top-0 absolute z-20 shadow-lg">
      <div className="w-[50%] flex justify-start items-center">
        <Link
          href="/"
          className="text-white font-semibold text-[30px] hover:text-[#C058C6ff]"
        >
          TheJelly.
        </Link>
      </div>

      <div className="w-[50%] flex justify-end items-center gap-8">
        <Link
          href="/"
          className="text-[18px] text-white tracking-wider hover:text-[#C058C6ff]"
        >
          HOME
        </Link>
        <Link
          href="/gallery"
          className="text-[18px] text-white tracking-wider hover:text-[#C058C6ff]"
        >
          GALLERY
        </Link>
        <Link
          href="/products"
          className="text-[18px] hover:bg-white hover:text-[#C058C6ff] text-white border-2 border-white py-2 px-8 tracking-wider hover:font-semibold"
        >
          OUR JELLYFISH
        </Link>
        <div className="flex justify-center items-center gap-2 w-[80px]">
          <button onClick={() => setOpen(!open)}>
            <Image src={Cart} width={30} height={30} alt="cart" quality={100} />
          </button>
          <h1 className="text-white text-[15px] tracking-wider">({totalItems})</h1>
        </div>

        <div
          className={`bg-white shadow-lg absolute h-screen right-0 top-0 ${
            open ? "w-[500px]" : "w-[0px]"
          } duration-700 transition-all myBurgerMenu`}
        >
          <Sidebar setOpen={setOpen} open={open} />
        </div>
      </div>
    </nav>
  );
}
