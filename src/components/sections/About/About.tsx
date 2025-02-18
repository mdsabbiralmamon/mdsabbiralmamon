"use client";

import React, { Suspense } from "react";
import "./About.css";
import Button from "@/components/UI/Button/Button";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/providers/CanvasLoader/CanvasLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Globe from "@/components/3dModels/Globe/Globe";

const About = () => {
  return (
    <div className="mt-20 px-5" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About Me */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1-sameon.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Md. Sabbir Al Mamon</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in both
                frontend and backend dev, creating dynamic and responsive
                websites.
              </p>
            </div>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2-sameon.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Canvas>
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 40]} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Globe position={[1.5, 9, 1.5]} />
                  <OrbitControls
                    enableZoom
                    enablePan
                    autoRotate
                    autoRotateSpeed={3}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">
                I&apos;m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext mb-10">
                I&apos;m based in Dhaka, Bangladesh and open to remote work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
