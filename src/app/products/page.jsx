import React from "react";
import MyProducts from "./MyProducts";

export default function Products() {
  return (
    <div>
      <div className="bg-banner bg-cover h-[600px] w-[100%] top-0 flex justify-center items-center">
        <h1 className="text-[70px] text-white font-semibold tracking-widest">
          <span className="hover:text-[#C058C6ff]">OUR JELLYFISH</span> .
        </h1>{" "}
      </div>

      <div className="flex justify-center items-center p-12">
        <MyProducts />
      </div>
    </div>
  );
}
