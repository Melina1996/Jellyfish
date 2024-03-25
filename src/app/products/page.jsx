import React from "react";
import MyProducts from "./MyProducts";

export default function Products() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-screen min-h-screen">
      <div className="h-[100px] w-screen absolute top-0 bg-black"></div>

      <div className="flex justify-center items-center pt-32">
        <MyProducts />
      </div>
    </div>
  );
}
