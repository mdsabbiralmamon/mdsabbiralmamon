import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/providers/LanguageProvider/LanguageProvider";
import { headers } from "next/headers";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabbir Al Mamon | Full Stack Developer",
  description:
    "Sabbir Al Mamon is a highly skilled Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Get expert web development solutions.",
  keywords: [
    "Sabbir Al Mamon",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js",
    "React Developer",
    "Web Development",
    "JavaScript",
    "Software Engineer",
  ],
  authors: [
    { name: "Sabbir Al Mamon", url: "https://mdsabbiralmamon.vercel.app" },
  ],
  openGraph: {
    title: "Sabbir Al Mamon | Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Check out my portfolio.",
    url: "https://mdsabbiralmamon.vercel.app",
    siteName: "Sabbir Al Mamon",
    images: [
      {
        url: "https://mdsabbiralmamon.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabbir Al Mamon - Full Stack Developer",
      },
      {
        url: "https://mdsabbiralmamon.vercel.app/images/Logo/sabbir-avatar.png",
        width: 1080,
        height: 1080,
        alt: "Sabbir Al Mamon - Full Stack Developer - Avatar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Al Mamon | Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Check out my portfolio.",
    images: ["https://mdsabbiralmamon.vercel.app/images/og-image.png"],
  },
  metadataBase: new URL("https://mdsabbiralmamon.vercel.app"),
  alternates: {
    canonical: "https://mdsabbiralmamon.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language");
  const defaultLang = acceptLanguage?.split(",")[0].split("-")[0] || "en";

  return (
    <html lang={defaultLang}>
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sabbir Al Mamon",
              url: "https://mdsabbiralmamon.vercel.app",
              sameAs: [
                "https://github.com/mdsabbiralmamon",
                "https://linkedin.com/in/mdsabbiralmamon",
                "https://twitter.com/mdsabbiralmamon",
                "https://www.facebook.com/mdsabb1ralmamon",
                "https://www.behance.net/sabbiralmamon",
                "https://www.fiverr.com/sameondev",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className={exo2.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
