import React from "react";
import Links from "../../ui/Links";
import { Separator } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="bg-footer-background min-h-[30vh] text-white flex flex-col w-full justify-center flex-wrap item-center text-center">
      <div className="max-w-[1374px] mx-auto pt-10">
        <h3 className="text-white font-bold text-[1.5rem]">Nodoka Hanaki</h3>
        <div>Fullstack Developer</div>
      </div>
      <Links bgColor="bg-none" />

      <div className="px-4 mb-4 mt-10">
        <Separator
          variant="solid"
          className="bg-gray-200 w-full h-[1px]  opacity-30"
        />
        <div className="pt-6">©2025 Nodoka Hanaki</div>
      </div>
    </footer>
  );
};

export default Footer;
