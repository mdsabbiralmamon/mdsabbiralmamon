import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD Sabbir Al Mamon || Fullstack Developer",
  description:
    "I am a Fullstack Developer. I love to work with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Next.js",
    "React",
    "SEO",
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
    "Node.js",
    "MongoDB",
    "Express.js",
    "MERN Stack",
  ],
  authors: [
    { name: "Md Sabbir Al Mamon", url: "https://github.com/mdsabbiralmamon" },
  ],
  themeColor: "#ffffff",
  openGraph: {
    title: "MD Sabbir Al Mamon || Fullstack Developer",
    description:
      "I am a Fullstack Developer. I love to work with React, Next.js, Node.js, and MongoDB.",
    url: "https://yourwebsite.com",
    siteName: "MD Sabbir Al Mamon || Fullstack Developer",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MD Sabbir Al Mamon || Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Sabbir Al Mamon || Fullstack Developer",
    description:
      "I am a Fullstack Developer. I love to work with React, Next.js, Node.js, and MongoDB.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    site: "@yourhandle",
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:title"
          content="MD Sabbir Al Mamon || Fullstack Developer"
        />
        <meta
          property="og:description"
          content="I am a Fullstack Developer. I love to work with React, Next.js, Node.js, and MongoDB."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="MD Sabbir Al Mamon || Fullstack Developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MD Sabbir Al Mamon || Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="I am a Fullstack Developer. I love to work with React, Next.js, Node.js, and MongoDB."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:site" content="@yourhandle" />
      </head>
      <body className={`${exo2.variable} antialiased`}>{children}</body>
    </html>
  );
}
