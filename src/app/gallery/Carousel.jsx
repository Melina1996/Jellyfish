"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import FishOne from "../../../public/img/jellyfish_one.jpg";
import FishTwo from "../../../public/img/jellyfish_two.jpg";

export default function Carousel() {
  //useState muss per default auf "0" stehen
  let [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) setCurrent(Data.crew.length - 1);
    else setCurrent(current - 1);
  }

  function nextSlide() {
    if (current === Data.crew.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  let slides = [FishOne, FishTwo];

  return (
    <div className="w-auto flex flex-wrap flex-col justify-center items-center overflow-hidden">
      <div
        className="flex transition ease-out duration-100"
        style={{
          //current represents the index of each slide/div (0-3). Each takes 25% so in total I get 100%, so one full round/turn.
          transform: `translateX(-${current * 50}%)`,
        }}
      >
        {slides.map((element, id) => {
          return (
            //each div takes the width of the whole screen
            <div className="flex justify-center items-center w-screen">
              <div className="w-[100%] md:w-[50%] max-[426px]:w-[100%] flex justify-center items-center max-[426px]:pb-20 max-[426px]:pt-10">
                <Image
                  className="rounded"
                  src={element}
                  width={700}
                  height={500}
                  alt=""
                />
              </div>
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
                id == current ? "bg-white" : "bg-[#808080]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
