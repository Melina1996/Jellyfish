import React from "react";
import Link from "next/link";
import Image from "next/image";

import FB from "../../../public/img/facebook.png";
import INSTAGRAM from "../../../public/img/instagram.png";
import TWITTER from "../../../public/img/twitter.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-black md:p-16 p-12">
      <div className="flex justify-center items-start tracking-wider flex-col gap-4">
        <h1 className="xl:text-[60px] md:text-[45px] text-white xl:w-[40%] lg:w-[50%] md:w-[55%] max-[426px]:text-[30px]">
          Interested in our newsletter?
        </h1>

        <p className="text-white xl:w-[35%] lg:w-[50%] md:text-[15px] max-[426px]:text-[14px] md:w-[55%]">
          Get monthly updates on new jellyfish on the market, special discounts
          and much more...
        </p>

        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            className="border-white border-2 lg:p-2 md:p-1 rounded outline-none max-[426px]:p-2"
            placeholder="Your e-mail"
          />
          <button className="hover:text-white font-semibold text-[25px] md:text-[20px] text-[#C058C6ff]"><PaperAirplaneIcon className="w-[25px] h-[25px] rotate-[320deg]"/></button>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center md:gap-4 max-[426px]:gap-6 lg:text-[15px] text-[14px] text-white w-[100%] py-10 tracking-wider">
        <div className="w-[40%] md:w-[25%] max-[426px]:w-[45%] flex flex-col justify-start gap-4 font-semibold">
          <Link href="/" className="hover:text-[#C058C6ff]">HOME</Link>
          <Link href="/gallery" className="hover:text-[#C058C6ff]">GALLERY</Link>
          <Link href="/products" className="hover:text-[#C058C6ff]">OUR JELLYFISH</Link>
          <Link href="/contact" className="hover:text-[#C058C6ff]">CONTACT</Link>
        </div>
        <div className="w-[40%] md:w-[25%] max-[426px]:w-[45%] flex flex-col justify-start gap-4 font-semibold">
          <Link href="/" className="hover:text-[#C058C6ff]">ABOUT</Link>
          <Link href="/gallery" className="hover:text-[#C058C6ff]">NETWORK</Link>
          <Link href="/products" className="hover:text-[#C058C6ff]">CLIENT SERVICE</Link>
          <Link href="/contact" className="hover:text-[#C058C6ff]">JOBS</Link>
        </div>
        <div className="xl:w-[33%] md:w-[45%] w-[100%] flex max-[426px]:justify-center md:justify-start items-start flex-col gap-2">
          <Link
            href="/"
            className="hover:text-white font-semibold md:text-[30px] lg:text-[35px] max-[426px]:text-[27px] text-[#C058C6ff]"
          >
            TheJelly.
          </Link>
          <p>
            We are the biggest jellyfish provider worldwide fishing the most
            beautiful fish. Dive in!
          </p>
        </div>
      </div>

      <div className="flex md:flex-row max-[426px]:flex-col md:justify-start max-[426px]:justify-center items-center md:gap-10 max-[426px]:gap-4 xl:pt-6">
        <p className="text-white tracking-wider md:text-[14px] max-[426px]:hidden">FOLLOW US:</p>


        <div className="flex justify-center items-center gap-12">
          <div className="flex gap-3 justify-center items-center">
            <Image src={FB} width={30} height={30} alt="facebook"/>
            <p className="text-white text-[14px] max-[426px]:hidden hover:text-[#C058C6ff]">FACEBOOK</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Image src={TWITTER} width={30} height={30} alt="twitter"/>
            <p className="text-white text-[14px] max-[426px]:hidden hover:text-[#C058C6ff]">TWITTER</p>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <Image src={INSTAGRAM} width={30} height={30} alt="instagram"/>
            <p className="text-white text-[14px] max-[426px]:hidden hover:text-[#C058C6ff]">INSTAGRAM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
