"use client";

import React from "react";
import Image from "next/image";
import Links from "../../ui/Links";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-[100vh] w-full">
      <header className="absolute inset-0 flex items-center justify-center flex-wrap bg-gradient-to-b from-gradient2 to-secondary-background">
        <div>
          <Image
            src="/images/hero-ocean.jpg"
            alt="ocean"
            fill
            priority
            aria-hidden="true"
            className="cover mix-blend-overlay inset-0"
          />
        </div>
        <div className="absolute inset-0 opacity-30 z-10 mix-blend-overlay bg-gray-300"></div>

        <div className="flex items-center justify-center z-1 min-h-[50vh] basis-full">
          <div className="flex items-center justify-center flex-wrap text-center content-center">
            <h1 className="bg-gradient-to-r from-text-primary to-text-gradient basis-full bg-clip-text text-7xl font-bold">
              Nodoka Hanaki
            </h1>
            <div className="basis-full text-[2rem] lg:text-[2.25rem] mt-2 bg-gradient2 bg-clip-text opacity-60">
              Fullstack Developer
            </div>
            <Links bgColor="bg-[#f0fcff]" />
          </div>
        </div>

        <div className="absolute bottom-[6rem] left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToAbout}
            className=" p-3 hover:scale-110"
            aria-label="Scroll to About section"
          >
            <IoIosArrowDown className="w-8 h-8 text-gradient animate-bounce" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
