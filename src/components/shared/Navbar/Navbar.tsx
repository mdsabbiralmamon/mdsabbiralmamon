"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/constants";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";

const Navbar = () => {
  const { t } = useTranslation();

  // Navigation Items
  const NavItems = () => {
    return (
      <ul className="flex flex-col md:flex-row px-4">
        {navLinks.map((item) => (
          <Link key={item.id} href={item.href}>
            <li className=" text-neutral-400 font-bold hover:text-white transition-colors my-4 lg:my-0 md:mx-4">
              {t(item.name)}
            </li>
          </Link>
        ))}
        <li className="flex items-center justify-center pb-4 my-4 lg:pb-0 lg:my-0">
          <LanguageSwitcher />
        </li>
      </ul>
    );
  };

  // Toggle Menu on Mobile
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-5">
          <Link
            href="/"
            className="text-neutral-400 text-xl font-bold hover:text-white transition-colors"
          >
            {t("logo")}
          </Link>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 text-xl font-extrabold hover:text-white transition-colors flex md:hidden"
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
          <nav className="hidden md:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div>
        {isOpen && (
          <nav className="lg:hidden">
            <NavItems />
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
