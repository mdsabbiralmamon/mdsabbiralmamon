"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../3dModels/HackerRoom/HackerRoom";
import CanvasLoader from "../CanvasLoader/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import Target from "../3dModels/Target/Target";
import ReactLogo from "../3dModels/ReactLogo/ReactLogo";
import Cube from "../3dModels/Cube/Cube";
import Rings from "../3dModels/Rings/Rings";
// import { useControls } from "leva";

const Hero = () => {
  const handRef = useRef<HTMLSpanElement>(null);

  // const {
  //   positionX,
  //   positionY,
  //   positionZ,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  //   scale,
  // } = useControls("HackerRoom", {
  //   positionX: { value: 1.5, min: -10, max: 10, step: 0.001 },
  //   positionY: { value: -7.81, min: -10, max: 10, step: 0.001 },
  //   positionZ: { value: 0.49, min: -10, max: 10, step: 0.001 },
  //   rotationX: { value: -2.9, min: -10, max: 10, step: 0.001 },
  //   rotationY: { value: -6.3, min: -10, max: 10, step: 0.001 },
  //   rotationZ: { value: -3.15, min: -10, max: 10, step: 0.001 },
  //   scale: { value: 0.11, min: 0, max: 1, step: 0.001 },
  // });

  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const istablet = useMediaQuery({
    query: "(min-width: 768px, max-width: 1024px)",
  });

  const sizes = calculateSizes(isMobile, isSmall, istablet);

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
      <div className="absolute w-full h-full inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition as [number, number, number]}
              rotation={[0, -Math.PI, 0]}

              // scale={scale}
              // position={[positionX, positionY, positionZ]}
              // rotation={[rotationX, rotationY, rotationZ]}
            />
            <group>
              <Target
                position={sizes.targetPosition as [number, number, number]}
              />
              <ReactLogo
                position={sizes.reactLogoPosition as [number, number, number]}
              />
              <Cube position={sizes.cubePosition as [number, number, number]} />
              <Rings
                position={sizes.ringPosition as [number, number, number]}
              />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
