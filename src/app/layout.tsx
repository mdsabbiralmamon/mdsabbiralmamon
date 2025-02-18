import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/providers/LanguageProvider/LanguageProvider";
import { headers } from "next/headers";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabbir Al Mamon",
  description: "Sabbir Al Mamon | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the default language from headers or default to 'en'
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language");
  const defaultLang = acceptLanguage?.split(",")[0].split("-")[0] || "en";
  return (
    <html lang={defaultLang} data-theme="light">
      <body className={exo2.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
