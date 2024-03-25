"use client"
import React from "react";
import Image from "next/image";

import { useDispatch,useSelector } from "react-redux";
import { add } from "../../lib/features/basket/basketSlice";


export default function JellyDetails({ params }) {

  //hier die Client-Variante, um mein JSON zu lesen, lese mein JSON in einem Slice und greife dann auf die Variable zu 
  const myData = useSelector((state) => state.json.value); 

  const id = params.id;

    const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-screen min-h-screen">
      <div className="h-[100px] w-screen absolute top-0 bg-black"></div>
      <div className="w-[80%] flex justify-center items-center">
        <div className="w-[40%] flex justify-center items-center">
          <div className="w-[300px] h-[280px] flex justify-center items-center">
            <div
              className="w-[100%] h-[80%] image-container rounded-lg"
              key={id}
            >
              <Image
                src={`${myData[id].image_path}`}
                width={300}
                height={200}
                className="w-[100%] h-[100%] object-cover my-image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="tracking-wider w-[60%] h-[280px] flex justify-start items-center">
          <div className="w-[80%] flex flex-col gap-4">
            <h1 className="font-semibold text-black text-[20px]">
              {myData[id].name.toUpperCase()}
            </h1>
            <h1 className="text-black">{myData[id].price}€</h1>
            <p className="text-black">{myData[id].description}</p>

            {/* I create a Btn-Component because I want the rest of the page to stay a server-Component while my Btn needs to be a Client-Component */}
            <button
        onClick={() => dispatch(add(myData[id]))}
        className="py-2 px-8 tracking-wider border-2 border-black hover:text-[#C058C6ff] w-[180px] font-semibold"
      >
        BUY NOW
      </button>
          </div>
        </div>
      </div>
    </div>
  );
}
