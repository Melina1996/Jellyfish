import React from "react";

import Carousel from "./Carousel";

export default function Gallery() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-[100px] w-screen absolute top-0 bg-black"></div>

      <Carousel />
    </div>
  );
}
