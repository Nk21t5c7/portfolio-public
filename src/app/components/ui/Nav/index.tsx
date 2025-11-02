"use client";
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky top-0 bg-bg-nav h-16 flex items-center justify-center z-50 px-4 bg-gradient2 shadow-lg">
      <nav className="flex justify-between items-center w-full max-w-[1374px] text-description font-medium">
        <div className="text-nav-name font-bold text-[1.25rem]">
          Nodoka Hanaki
        </div>
        <div className="lg:hidden z-50">
          {/* <FaBars onClick={handleMenu} /> */}
          <button
            type="button"
            onClick={handleMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-2"
          >
            <FaBars aria-hidden="true" />
          </button>
          <ul
            className={`${
              open
                ? "opacity-100 max-h-80 pointer-events-auto"
                : "opacity-0 max-h-0 pointer-events-none"
            } border-t z-50 bg-bg-nav flex flex-col right-0 absolute left-0 top-16 p-4 bg-gradient2 gap-6 transform transition-opacity duration-150 shadow-lg`}
          >
            <Link href="#about" className="w-full">
              <li className="w-full hover:bg-primary hover:bg-opacity-5  hover:text-primary px-4 py-2">
                About
              </li>
            </Link>
            <Link href="#skills" className="w-full">
              <li className="w-full hover:bg-primary hover:bg-opacity-5  hover:text-primary px-4 py-2">
                Skills
              </li>
            </Link>
            <Link href="#projects" className="w-full">
              <li className="w-full hover:bg-primary hover:bg-opacity-5  hover:text-primary px-4 py-2">
                Projects
              </li>
            </Link>
            <Link href="#experience" className="w-full">
              <li className="w-full hover:bg-primary hover:bg-opacity-5  hover:text-primary px-4 py-2">
                Experience
              </li>
            </Link>
          </ul>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex gap-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
