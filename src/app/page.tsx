import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
