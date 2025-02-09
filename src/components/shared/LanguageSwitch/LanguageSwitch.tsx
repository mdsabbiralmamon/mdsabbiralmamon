"use client";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import React from "react";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center">
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={i18n.language}
        className="inline-flex bg-transparent text-white border-none cursor-pointer"
      >
        <option value="en" className="bg-black w-6">
          {"🌍  "}
          {t("language.en")}
        </option>
        <option value="bn" className="bg-black w-6">
          {"🌍  "}
          {t("language.bn")}
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
