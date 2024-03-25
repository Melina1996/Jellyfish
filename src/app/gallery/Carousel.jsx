"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import FishOne from "../../../public/img/jellyfish_one.jpg";
import FishTwo from "../../../public/img/jellyfish_two.jpg";
import FishThree from "../../../public/img/jellyfish_three.png";

import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/solid";


export default function Carousel() {
  //useState muss per default auf "0" stehen
  const [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  }

  function nextSlide() {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  let slides = [
    {
      img: FishOne,
      name: "MEDUSA GLORIA",
      description: "Our special jellyfish living 300m below sea level",
    },
    {
      img: FishTwo,
      name: "MEDUSA CLARIO",
      description: "Our most popular jellyfish living 546m below sea level",
    },
    {
      img: FishThree,
      name: "MEDUSA LATEA",
      description: "Our most beautiful jellyfish living 223m below sea level",
    },
  ];

  return (
    <div className="w-auto flex flex-wrap flex-col justify-center items-center overflow-hidden">
      <div
        className="flex transition ease-out duration-100"
        style={{
          //current represents the index of each slide/div (0-3). Each takes 25% so in total I get 100%, so one full round/turn.
          transform: `translateX(-${current * 33}%)`,
        }}
      >
        {slides.map((element, id) => {
          return (
            //each div takes the width of the whole screen
            <div className="flex justify-center items-center w-screen relative">
              <button className="absolute left-40" onClick={()=>previousSlide()}><ArrowLeftIcon className="w-[30px] h-[30px] font-semibold"/></button>

              <div className="w-[100%] md:w-[50%] max-[426px]:w-[100%] flex justify-center items-center max-[426px]:pb-20 max-[426px]:pt-10 group">
                <Image
                  className="rounded"
                  src={element.img}
                  width={700}
                  height={500}
                  alt=""
                />
                {/* 2 divs in absolute to create the upwards moving box effect */}
                <div className="w-[700px] h-[50%] absolute bottom-[-50%] group-hover:bottom-[0] transition-all opacity-50 bg-black p-2 rounded"></div>

                <div className="w-[100%] h-[50%] bottom-[-50%] group-hover:bottom-[0] absolute flex flex-col justify-center items-center p-2 rounded gap-2">
                  <h1 className="text-white tracking-widest">{element.name}</h1>
                  <p className="text-white tracking-widest">
                    {element.description}
                  </p>
                </div>
              </div>
              <button className="absolute right-40" onClick={()=>nextSlide()}><ArrowRightIcon className="w-[30px] h-[30px] font-semibold"/></button>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-28 flex items-center justify-center gap-3 w-full">
        {slides.map((element, id) => {
          return (
            //tertinary condition: bg-color changes when slide active -> current is == id
            <div
              onClick={() => setCurrent(id)}
              id={"circle" + 1}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                id == current ? "bg-black" : "bg-[#808080]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
