import About from "@/components/sections/About/About";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import Projects from "../components/sections/Projects/Projects";
import ClientsReview from "@/components/sections/ClientsReview/ClientsReview";
import Footer from "@/components/shared/Footer/Footer";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <ClientsReview />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
