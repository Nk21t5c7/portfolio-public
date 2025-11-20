"use client";
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  }

  return (
    <div className="sticky top-0 bg-bg-nav h-16 flex items-center justify-center z-50 px-4 bg-gradient2 shadow-lg">
      <nav className="flex justify-between items-center w-full max-w-[1374px] text-description font-medium">
        <div className="text-nav-name font-bold text-[1.25rem]">
          Nodoka Hanaki
        </div>
        <div className="lg:hidden z-50">
          <button
            type="button"
            onClick={handleMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <FaBars aria-hidden="true" />
          </button>

          {/* Mobile */}
          <ul
            className={`${
              open
                ? "opacity-100 max-h-80 pointer-events-auto"
                : "opacity-0 max-h-0 pointer-events-none"
            } border-t z-50 bg-bg-nav flex flex-col right-0 absolute left-0 top-16 p-4 bg-gradient2 gap-6 transform transition-all duration-150 shadow-lg`}
          >
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="w-full hover:bg-primary hover:bg-opacity-5 hover:text-primary px-4 py-2"
                onClick={handleMenuItemClick}
              >
                <Link href={item.href} className="w-full block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PC */}
        <div className="max-lg:hidden">
          <ul className="flex gap-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
