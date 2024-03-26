"use client"
import React, { useEffect,useState } from "react";
import Image from "next/image";

import { useDispatch,useSelector } from "react-redux";
import { add,buying } from "../../lib/features/basket/basketSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function JellyDetails({ params }) {

  //hier die Client-Variante, um mein JSON zu lesen, lese mein JSON in einem Slice und greife dann auf die Variable zu 
  const myData = useSelector((state) => state.json.value); 

  const[buy,setBuy]=useState(false)

  const id = params.id;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(buying(buy))
    }, [buy])
    

    useEffect(() => {

      setInterval(() => {

        setBuy(false)
        
      }, 3000);

    }, [buy])
    

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen relative">
      <div className="h-[100px] w-screen absolute top-0 bg-black"></div>
        <Link href="/products" className="absolute top-[150px] left-[100px]"><ArrowLeftIcon className="w-[30px] h-[30px] text-black hover:text-[#C058C6ff]"/></Link>
        <div className="flex justify-start items-center w-[84%] pt-18">
              <h1 className="font-semibold text-black text-[30px]">
              {myData[id].name.toUpperCase()}
            </h1>
              </div>
      <div className="w-[90%] flex justify-center items-center">
        <div className="w-[30%] flex justify-center items-center">
          <div className="w-[300px] h-[280px] flex flex-col justify-center items-center">

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

        <div className="tracking-wider w-[70%] h-[280px] flex justify-start items-center">
          <div className="w-[90%] flex flex-col gap-4">

            <p className="text-black">{myData[id].description}</p>
            <h1 className="text-black font-semibold">{myData[id].price}€</h1>


            {/* I create a Btn-Component because I want the rest of the page to stay a server-Component while my Btn needs to be a Client-Component */}
            <button
        onClick={() => {dispatch(add(myData[id])), setBuy(true)}}
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
