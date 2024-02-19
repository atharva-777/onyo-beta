"use client";
import Image from "next/image";
import Homebg from "../../public/images/homepagebg.png";
import exp from "../../public/images/exploreimages.png";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Play from "../../public/images/googleplay.png";

import Autoplay from "embla-carousel-autoplay";
import { Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});
import { motion, AnimatePresence, Variants } from "framer-motion";

const words: string[] = ["Connect", "Explore", "Share"];

export default function IntroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={poppins.className}>
      <div className="h-screen flex  justify-center relative">
        {/* Use the Image component */}
        <Image
          src={Homebg}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="absolute  top-0 left-0 w-full max-h-[91vh]"
        />

        <div className="z-10 text-white flex flex-col xl:flex-row w-screen  ">
          <div className="xl:w-3/5 pl-3  lg:pr-8 xl:ml-14 xl:mt-12 p-5 xl:pt-12  ">
            <div className="flex items-center w-full">
              <h1 className="text-[26px] sm:text-4xl  md:text-4xl lg:text-6xl xl:text-[55px] 2xl:text-[65px] 3xl:text-[90px] font-bold text-black">
                Find your Tribe,
              </h1>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-[26px] text-[#FC8211] sm:text-4xl   md:text-4xl lg:text-6xl xl:text-[55px] 2xl:text-[65px] 3xl:text-[90px] font-bold">
                    <span className="ml-3">{words[currentWordIndex]}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-1xl xl:text-2xl xl:leading-[40px] sm:leading-[30px]	 md:mt-2 xl:mt-0 text-[#515050]  xl:pt-5 xl:w-4/5 2xl:text-[27px] 3xl:text-[35px]	">
              Connect with like-minded travelers for shared adventures. Create
              great memories, join experiences curated by others.
            </p>
            <Image
              src={Play}
              alt="google play"
              className="my-5 xl:w-[35vh] w-[40vw] sm:w-[22vw]"
            />
          </div>

          <div className="xl:w-2/5 relative ">
            <Image src={exp} alt="Explore Image" className=" w-full p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
