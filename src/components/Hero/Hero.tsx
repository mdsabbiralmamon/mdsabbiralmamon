"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const handRef = useRef<HTMLSpanElement>(null);

  // Waving animation
  useEffect(() => {
    gsap.to(handRef.current, {
      rotation: 30,
      duration: 0.3,
      yoyo: true,
      repeat: -1,
      easeIn: "elastic.out(1, 0.3)",
      transformOrigin: "70% 70%",
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div className="mt-28">
        <p className="text-2xl text-center font-semibold text-white">
          Hi{" "}
          <span ref={handRef} className="inline-block">
            👋
          </span>{" "}
          I am Md. Sabbir Al Mamon
        </p>
        <div className="text-center text-white text-2xl mt-4">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a passionate Full Stack Developer 👨‍💻")
                .pauseFor(1500)
                .deleteChars(42)
                .pauseFor(1500)
                .typeString("love building dynamic web applications 🚀")
                .pauseFor(1500)
                .deleteChars(41)
                .pauseFor(1500)
                .typeString("am skilled in React ⚛️")
                .pauseFor(1500)
                .deleteChars(8)
                .pauseFor(1500)
                .typeString("Next.js Framework 🌐")
                .pauseFor(1500)
                .deleteChars(20)
                .pauseFor(1500)
                .typeString("MongoDB Database 📊")
                .pauseFor(1500)
                .deleteChars(19)
                .pauseFor(1500)
                .typeString("Node.js Backend 🚀")
                .pauseFor(1500)
                .deleteChars(18)
                .pauseFor(1500)
                .typeString("Express.js Framework 🌐")
                .pauseFor(1500)
                .deleteChars(23)
                .pauseFor(1500)
                .typeString("Firebase 📊")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(1500)
                .typeString("Let's Build Something Amazing Together!")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(1500)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
