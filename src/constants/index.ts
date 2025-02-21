export const navLinks = [
  {
    id: 1,
    name: "nav.about",
    href: "#about",
  },
  {
    id: 1,
    name: "nav.status",
    href: "#status",
  },
  {
    id: 1,
    name: "nav.resume",
    href: "#resume",
  },
  {
    id: 1,
    name: "nav.works",
    href: "#works",
  },
  {
    id: 1,
    name: "nav.contact",
    href: "#contact",
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: "Studio Orange - An Architecture Firm Website",
    desc: "Studio Orange is a modern architecture firm that specializes in creating sustainable and innovative designs. The website showcases the firm's portfolio, services, and team, providing a comprehensive overview of their work.",
    subdesc:
      "Built with Next.js, TailwindCSS, and Framer Motion, Studio Orange's website is designed to be visually appealing and user-friendly, with a focus on responsive design and smooth animations.",
    href: "https://studioorangearchitects.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "North Studio - Architect Farm Website",
    desc: "North Studio is a leading architecture firm that specializes in creating sustainable and innovative designs. The website showcases the firm's portfolio, services, and team, providing a comprehensive overview of their work.",
    subdesc:
      "Built with Next.js, TailwindCSS, and Framer Motion, North Studio's website is designed to be visually appealing and user-friendly, with a focus on responsive design and smooth animations.",
    href: "https://northstudiobd.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Soul Connect - Matrimony Platform",
    desc: "Soul Connect is a modern matrimony platform that connects individuals looking for a life partner. The platform offers a range of features, including profile creation, matching algorithms, with separate admin and user dashboards.",
    subdesc:
      "Built with React.js, TailwindCSS, and Framer Motion, Soul Connect is designed to be visually appealing and user-friendly, with a focus on responsive design and smooth animations.",
    href: "https://soul-connect-bysam.web.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];
