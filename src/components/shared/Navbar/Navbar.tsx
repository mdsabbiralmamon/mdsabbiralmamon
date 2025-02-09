"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="text-xl font-bold">
            {t("logo")}
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                href="#status"
                className="hover:text-gray-300 transition-colors"
              >
                {t("nav.status")}
              </Link>
            </li>
            <li>
              <Link
                href="#resume"
                className="hover:text-gray-300 transition-colors"
              >
                {t("nav.resume")}
              </Link>
            </li>
            <li>
              <Link
                href="#works"
                className="hover:text-gray-300 transition-colors"
              >
                {t("nav.works")}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-gray-300 transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </li>
            {/* Language Switcher */}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
