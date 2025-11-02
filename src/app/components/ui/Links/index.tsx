"use client";

import React from "react";
import { links } from "@/app/data/data";

interface LinksProps {
  bgColor: String;
}

const Links: React.FC<LinksProps> = ({ bgColor }) => {
  return (
    <div className="flex gap-4 justify-center py-2 z-30">
      {links.map((item) => {
        return (
          <a
            key={item.label}
            className={`${bgColor} p-2 rounded-lg hover:scale-110 transition-transform duration-200 cursor-pointer`}
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
            aria-label={item.label}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
