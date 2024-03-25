"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Image from "next/image";

import MyBasket from "./MyBasket";

import Close from "../../../public/img/close.png";

export default function Sidebar(props) {
  const basketItems = useSelector((state) => state.basket.value); // Access the counter state

  const [orderedPrice, setOrderedPrice] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  //use Effect to constantly calculate the total of items in my basket
  useEffect(() => {
    setOrderedPrice(
      basketItems.reduce(
        (total, currentValue) =>
          (total = total + currentValue.price * currentValue.quantity),
        0
      )
    );
    setTotalPrice(
      basketItems.reduce(
        (total, currentValue) =>
          (total = 3.55 + currentValue.price * currentValue.quantity),
        0
      )
    );
  }, [basketItems]);

  return (
    <div className="w-[100%]">
      <div className="flex justify-end w-[100%] p-4">
        <button
          onClick={() => props.setOpen(!props.open)}
          className={`hover:rotate-180 drop-shadow-xl duration-[500ms] ${
            props.open ? "block" : "hidden"
          }`}
        >
          <Image src={Close} width={25} height={25} />
        </button>
      </div>

      <div className="w-[100%] flex flex-col justify-center items-start gap-4 px-10">
        <h1 className="tracking-wider font-semibold">BASKET</h1>
        {basketItems.length != 0 ? (
          <div className="flex flex-col gap-2">
            {basketItems.map((element, id) => {
              return <MyBasket element={element} key={id} myId={id} />;
            })}
            <div className="py-4">
              <hr className="border-[1px]" />
            </div>

            <div className="text-[15px] flex flex-col gap-2">
              <div className="w-[100%] flex justify-center items-center">
                <p className="w-[50%] text-gray-500 text-left">Order value:</p>
                <p className="w-[50%] text-right">{orderedPrice} €</p>
              </div>
              <div className="w-[100%] flex justify-center items-center">
                <p className="w-[50%] text-gray-500 text-left">Shipping:</p>
                <p className="w-[50%] text-right">3.55 €</p>
              </div>
            </div>

            <div className="py-4">
              <hr className="border-[1px]" />
            </div>

            <div className="w-[100%] flex justify-center items-center font-semibold text-[18px]">
                <p className="w-[50%] text-left">Total:</p>
                <p className="w-[50%] text-right">{totalPrice} €</p>
              </div>
          </div>
        ) : (
          <h1>YOUR BASKET IS EMPTY </h1>
        )}
      </div>
    </div>
  );
}
