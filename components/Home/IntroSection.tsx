"use client";
import Image from "next/image";
import Homebg from "../../public/images/homepagebg.webp";
import exp from "../../public/images/exploreimages.webp";
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
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";

const poppins = Inter({
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
      <div className="py-8 xl:py-0  xl:h-[40vw] flex  justify-center relative mb-10 xl:mb-0">
        {/* Use the Image component */}
        <Image
          src={Homebg}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="absolute  top-0 left-0 w-full h-full"
        />
        <div className="z-10 text-white flex flex-col xl:flex-row w-screen ">
          <div className="xl:w-3/5 px-3  xl:pr-8 xl:ml-[4vw] sm:ml-[4vw] sm:mt-[3vw] xl:mt-0  xl:p-5  flex align-middle flex-col">
            <div className="my-auto">
              <div className="flex items-center w-full">
                <h1 className="text-[7vw] sm:text-4xl  md:text-5xl lg:text-5xl xl:text-[3.8vw]  2xl:text-[4vw] 3xl:text-[90px] font-bold text-black">
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
                    <h1 className="text-[7vw] text-[#FC8211] sm:text-4xl   md:text-5xl lg:text-5xl xl:text-[3.8vw] 2xl:text-[4vw] 3xl:text-[90px] font-bold">
                      <span className="ml-3">{words[currentWordIndex]}</span>
                    </h1>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl xl:text-2xl xl:leading-[31px] sm:leading-[30px]  leading-[23px] 2xl:leading-[2.6vw]  text-justify md:mt-2 xl:mt-0 text-[#515050]  xl:pt-5 xl:w-[90%] 2xl:text-[2vw] 3xl:text-[50px]	">
                Connect with fellow explorers for shared adventures. Create
                great memories, join experiences curated by others.
              </p>
              <p className="text-lg sm:text-xl  md:text-2xl xl:text-2xl xl:leading-[31px] sm:leading-[30px] leading-[23px]  2xl:leading-[2.6vw]   text-justify mt-3 xl:mt-[0.5vw] text-[#515050]  xl:pt-5 xl:w-[90%] 2xl:text-[2vw] 3xl:text-[50px]	">
                Say &quot;Yo!&quot; to your next travel story!
              </p>
              {/* <Image
                src={Play}
                alt="google play"
                className="mt-5 xl:w-[15vw] w-[40vw] sm:w-[22vw] "
              /> */}
            </div>
          </div>

          <div className="xl:w-2/5 relative flex justify-center">
            <Image
              src={exp}
              alt="Explore Image"
              className=" lg:w-full lg:p-5 sm:w-[75%] w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
