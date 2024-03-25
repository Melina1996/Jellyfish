"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { add, remove, removeOneItem } from "../lib/features/basket/basketSlice";

import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function MyBasket(props) {
  const dispatch = useDispatch();
  return (
    <div className="w-[80%] flex justify-start items-center gap-4">
      <div className="w-[50%]">
        <Image
          src={props.element.image_path}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="w-[50%] tracking-wider flex flex-col gap-2">
        <h1 className="font-semibold text-[15px]">
          {props.element.name.toUpperCase()}
        </h1>
        <p>{props.element.price * props.element.quantity} €</p>

        <div className="flex gap-2 items-center justify-start">
          <button
            onClick={() => dispatch(removeOneItem(props.element))}
            className="text-black text-[20px] font-semibold"
          >
            -
          </button>
          <p className="text-[15px]">{props.element.quantity}</p>
          <button
            onClick={() => dispatch(add(props.element))}
            className="text-black text-[20px] font-semibold"
          >
            +
          </button>

          <button onClick={()=> dispatch(remove(props.myId))}>
            <TrashIcon className="w-[18px] h-[18px] hover:text-red-500 text-black"/>
          </button>
        </div>
      </div>
    </div>
  );
}
