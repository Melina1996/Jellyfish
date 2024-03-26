"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useState,useEffect,useRef } from "react";

//hier die Server-Variante, um mein JSON zu lesen
// import { promises as fs } from "fs";

import Image from "next/image";
import Link from "next/link";

import Banner from "../Components/Banner";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function MyProducts() {
  //server-variante data: OJO: muss async function aus meiner function machen
  // const file = await fs.readFile(process.cwd() + "/json/data.json", "utf8");
  // const data = JSON.parse(file);

  const[search,setSearch]=useState(false)

  //for the click outside of div to close
  //put the ref on my input below

  let menuRef = useRef()

  useEffect(() => {
    function handler(e){
      if(!menuRef.current.contains(e.target))
      setSearch(false)
    }
    document.addEventListener("mousedown",handler)

    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[search])  

  const [jellyfish, setJellyfish] = useState("");

  //to make search robust: capital or small letters do not matter
  function getInput(e) {
    setJellyfish(
      e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLowerCase()
    );
  }

  const myData = useSelector((state) => state.json.value);

  const [itemsPerPage, setItemsPerPage] = useState(myData.length);

  const [currentPage, setCurrentPage] = useState(1);

  //need start index to know from where in my array I start to show the items
  //each time I press the btn, the value of currentPage changes and therefore also the starting index of my item to be shown
  const startIndex = (currentPage - 1) * itemsPerPage;

  //need end index to know until where in my array I show the items
  const endIndex = startIndex + itemsPerPage;

  //my currentitems are the ones from starting index to end index
  const currentItems = myData.slice(startIndex, endIndex);

  //Math.ceil: rounds UP
  //I get the total of my pages by dividing the length of all of my items by the number of items I want per page
  const totalPages = Math.ceil(myData.length / itemsPerPage);

  const handleNextPage = () => {
    //if the current page is still
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //array that stocks amount of buttons in order to create the respective amount of buttons (1 btn each page)
  let buttons = [];

  //loop to push numbers corresponding to my total page count on buttons-array
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(i);
  }

  return (
    <div className="flex justify-center flex-col items-center gap-6 min-h-screen w-screen">
      <Banner />
      <div className="w-[75%] flex justify-center items-center h-[100px]">
        <div className="w-[20%] flex justify-start items-center gap-2">
          <button onClick={()=>setSearch(!search)}><MagnifyingGlassIcon className="w-[25px] h-[25px] text-black font-semibold"/></button>
          {" "}
          {
            search ? 

            <input
            ref={menuRef}
            type="text"
            placeholder="Search for a jellyfish"
            className="rounded border-black p-2 border-2 outline-none placeholder:italic absolute"
            onChange={(e) => getInput(e)}
          />

          :

          ""

          }
         
        </div>
        <div className="w-[60%] flex justify-center items-center gap-2">
          {buttons.map((element, id) => {
            return (
              <button
                key={id}
                onClick={() => setCurrentPage(element)}
                className={`${
                  currentPage == element
                    ? "underline text-gray-600"
                    : "no-underline text-black"
                } rounded-full py-2 px-4 flex justify-center items-center text-[15px]`}
              >
                <p>{element}</p>
              </button>
            );
          })}
        </div>
        <div className="w-[20%] flex justify-end items-center gap-4">
          <p className="text-[15px]">See</p>
          <div className="flex justify-center items-center gap-2 text-[15px]">
            <button onClick={() => setItemsPerPage(myData.length)}>
              <span
                className={`hover:text-gray-600 ${
                  itemsPerPage == myData.length ? "text-gray-600" : "text-black"
                }`}
              >
                ALL
              </span>{" "}
              |
            </button>
            <button onClick={() => setItemsPerPage(3)}>
              <span
                className={`hover:text-gray-600 ${
                  itemsPerPage == 3 ? "text-gray-600" : "text-black"
                }`}
              >
                3
              </span>{" "}
              |
            </button>
            <button
              onClick={() => setItemsPerPage(6)}
              className="hover:text-gray-600"
            >
              <span
                className={`hover:text-gray-600 ${
                  itemsPerPage == 6 ? "text-gray-600" : "text-black"
                }`}
              >
                6
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start gap-6 min-h-screen w-[75%] pb-12">
        {currentItems.map((element, id) =>
          element.name.includes(jellyfish) ? (
            <div className="w-[300px] h-[280px]" key={id}>
              <div
                className="w-[100%] h-[80%] image-container rounded-lg"
                key={id}
              >
                <Link href={`/products/${id}`}>
                  <Image
                    src={`${element.image_path}`}
                    width={300}
                    height={200}
                    className="w-[100%] h-[100%] object-cover my-image"
                    alt=""
                  />
                </Link>
              </div>

              <div className="pt-2 tracking-wider h-[20%]">
                <Link href={`/products/${id}`}>
                  <h1 className="font-semibold">
                    {element.name.toUpperCase()}
                  </h1>
                </Link>
                <h1>{element.price}€</h1>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
