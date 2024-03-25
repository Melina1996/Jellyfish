import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import Close from "../../../public/img/close.png";

export default function Burger(props) {
  return (
    <div className='flex flex-col justify-center items-center text-black gap-4 p-10'>

        <Link
          href="/"
          className="text-[15px] tracking-wider hover:text-[#C058C6ff]"
        >
          HOME
        </Link>
        <Link
          href="/gallery"
          className="text-[15px] tracking-wider hover:text-[#C058C6ff]"
        >
          GALLERY
        </Link>
        <Link
          href="/products"
          className="text-[15px] tracking-wider hover:text-[#C058C6ff]"
        >
          OUR JELLYFISH
        </Link>
        <Link
          href="/contact"
          className="text-[15px] tracking-wider hover:text-[#C058C6ff]"
        >
          CONTACT
        </Link>

        <button
          onClick={() => props.setBurger(!props.burger)}
          className={`hover:rotate-180 drop-shadow-xl duration-[500ms] absolute top-6 right-6`}
        >
          <Image src={Close} width={25} height={25} alt={"burger"}/>
        </button>
        

    </div>
  )
}
