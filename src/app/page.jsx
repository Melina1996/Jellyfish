"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



export default function Home() {
  const myForm = useSelector((state) => state.form.value);

  

  return (
    <main className="min-h-screen">
      <div className="bg-banner bg-cover h-[600px] w-[100%] flex justify-center items-center">
        <h1 className="text-[70px] text-white font-semibold tracking-widest">
          <span className="hover:text-[#C058C6ff]">DIVE IN</span> .
        </h1>
      </div>


      {
        myForm != "" ? 
        <div>
        <h1>{myForm.title}</h1>
        <h1>{myForm.name}</h1>
      </div> :
      ""}
      
    </main>
  );
}
