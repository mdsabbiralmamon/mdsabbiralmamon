"use client";
import { ReactNode, useEffect } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

// Import JSON translations
import enTranslations from "@/locales/translations/en.json";
import bnTranslations from "@/locales/translations/bn.json";

interface LanguageProviderProps {
  children: ReactNode;
}

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    bn: {
      translation: bnTranslations,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  useEffect(() => {
    // Update HTML lang attribute when language changes
    const handleLanguageChange = () => {
      document.documentElement.lang = i18next.language;
    };

    i18next.on("languageChanged", handleLanguageChange);
    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default LanguageProvider;
