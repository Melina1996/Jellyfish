import React from "react";

export default function Banner() {
  return (
    <div className="w-[100%] h-[50px] relative overflow-hidden">
      <div className='overflow-hidden px-0 w-max bg-black text-white flex group'>
        <div className="h-[50px] flex items-center animate-carousel group-hover:[animation-play-state:paused]">
          <p className="tracking-wider">
            ** NEW JELLYFISH AVAILABLE IN ALL OF OUR SHOPS || CHECK OUT OUR NEW OFFERS || FIRST BUY: 50% OFF, SECOND BUY 20% OFF **
          </p>
        </div>

        <div className="h-[50px] flex items-center animate-carousel group-hover:[animation-play-state:paused]">
        <p className="tracking-wider">
            ** NEW JELLYFISH AVAILABLE IN ALL OF OUR SHOPS || CHECK OUT OUR NEW OFFERS || FIRST BUY: 50% OFF, SECOND BUY 20% OFF **
          </p>
        </div>
      </div>
    </div>
  );
}
