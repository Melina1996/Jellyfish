"use client"
import React from 'react'
import { useState,useEffect } from 'react';

export default function ProgressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

//In the above code, you can see I have added a scroll event listener which calls a function handleScroll upon scroll, In return you can see I am removing the event listener to avoid memory leaks as useEffect may run several times.

//In the function, you can see I am getting and total height of the window and calculating the current scrolled percentage according to the current scroll position. In the function, you can also see that I am updating the scrollPercetage` variable state and now we have made the scroll progress bar dynamic.

  useEffect(()=>{

    const handleScroll = ()=>{
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        
        const scrollPercent = (scrollY / (documentHeight - windowHeight))*100 

        setScrollPercentage(scrollPercent)
    }


    window.addEventListener("scroll", handleScroll);

    return()=>{
        window.removeEventListener("scroll", handleScroll)
    }

  },[])
  return (
    <div>
        {/* This is going to have a width of 100% and act as the container for the dynamically changing progress bar. */}
        <div className='h-[8px] w-[100%] bg-white fixed top-0 left-0 right-0'>
        {/* Initially the width of the progress fill is going to be 0 and while we scroll well programmatically change the width of the bar as we decrease or increase. */}
      <div 
        style={{
          height: "100%",
          backgroundColor: "black",
          width: `${scrollPercentage}%`,
        }}
      >
       
      </div>
      </div>
    </div>
  )
}
