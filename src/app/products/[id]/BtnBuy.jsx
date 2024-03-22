"use client";

import React from "react";

import { useDispatch } from "react-redux";
import { add } from "../../lib/features/basket/basketSlice";

export default function BtnBuy(props) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-start w-[50%]">
      <button
        onClick={() => dispatch(add(props.myData))}
        className="py-2 px-8 tracking-wider hover:text-[#C058C6ff]"
      >
        <p className="text-black ">BUY NOW</p>
      </button>
    </div>
  );
}
