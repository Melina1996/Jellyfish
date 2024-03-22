import React from "react";
import { promises as fs } from "fs";
import Image from "next/image";

import BtnBuy from "./btnBuy";


export default async function JellyDetails({ params }) {
  const file = await fs.readFile(process.cwd() + "/json/data.json", "utf8");
  const data = JSON.parse(file);
  const id = params.id;

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-screen min-h-screen">
        <div className="h-[100px] w-screen absolute top-0 bg-black">

        </div>
      <div className="w-[80%] flex justify-center items-center">
        <div className="w-[40%] flex justify-center items-center">
          <div className="w-[300px] h-[280px] flex justify-center items-center">
            <div
              className="w-[100%] h-[80%] image-container rounded-lg"
              key={id}
            >
              <Image
                src={`${data[id].image_path}`}
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
              {data[id].name.toUpperCase()}
            </h1>
            <h1 className="text-black">{data[id].price}€</h1>
            <p className="text-black">{data[id].description}</p>

            {/* I create a Btn-Component because I want the rest of the page to stay a server-Component while my Btn needs to be a Client-Component */}
            <BtnBuy myData={data[id]}/>

          </div>
        </div>

      </div>

    </div>
  );
}
