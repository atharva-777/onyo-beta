"use client";
import Image from "next/image";
import Homebg from "../../public/images/homepagebg.webp";
import exp from "../../public/images/exploreimages.webp";
import iPhone from "../../public/images/iPhone.png";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Play from "../../public/images/googleplay.png";
import { Loader2 } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import { Inter, Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";

const inter = Inter({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});
import { motion, AnimatePresence, Variants } from "framer-motion";

const words: string[] = ["Connect", "Explore", "Share"];

export default function IntroSection() {
  const [email, setEmail] = useState("");
  const [succmsg, setSuccmsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleNotifyMe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // Email is not in the correct format
      setSuccmsg("*Enter Valid Email");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_ENDPOINT!!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      // console.log("Error sending notification request:", response);

      if (response.ok) {
        setSuccmsg("Thanks. We will reach out to you soon.");
        setLoading(false);
      } else {
        console.log(response);

        setSuccmsg("Request Failed.");
        setLoading(false);
      }
    } catch (error) {
      setSuccmsg("Request Failed.");
      setLoading(false);
      console.log("Error sending notification request:", error);
    }
  };
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
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
              <div className={poppins.className}>
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
              </div>
              <div className={inter.className}>
                <p className="text-lg sm:text-xl md:text-2xl xl:text-2xl xl:leading-[31px] sm:leading-[30px]  leading-[23px] 2xl:leading-[2.6vw]  text-justify md:mt-2 xl:mt-0 text-[#515050]  xl:pt-5 xl:w-[90%] 2xl:text-[2vw] 3xl:text-[50px]	">
                  Connect with fellow explorers for shared adventures. Create
                  great memories, join experiences curated by others.
                </p>
                <p className="text-lg sm:text-xl  md:text-2xl xl:text-2xl xl:leading-[31px] sm:leading-[30px] leading-[23px]  2xl:leading-[2.6vw]   text-justify mt-3 xl:mt-[0.5vw] text-[#515050]  xl:pt-5 xl:w-[90%] 2xl:text-[2vw] 3xl:text-[50px]	">
                  Yoliday is in Alpha! Join and be the first to say
                  &#8220;Yo!&#8221; to your next travel story!
                </p>
              </div>
              {/* <Image
                src={Play}
                alt="google play"
                className="mt-5 xl:w-[15vw] w-[40vw] sm:w-[22vw] "
              /> */}
              <div className="xl:w-full sm:w-4/5 xl:block">
                <form className="mt-5 flex " onSubmit={handleNotifyMe}>
                  <div className="relative flex align-middle items-stretch w-full  mb-0 ">
                    <label htmlFor="email" className="sr-only text-lg">
                      Enter Your Mail
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#FF4902"
                      className="xl:w-[3.3vw] lg:w-[3vh] w-[4vh] absolute mt-[1.1vh]  ml-[1.3vh]  xl:mt-[0.9vw]  xl:ml-[1.4vw] "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>

                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full pl-[7vh] text-base pr-[43vw] sm:pr-[25vw]  md:pr-[22vw] text-black lg:pr-[18vw] sm:text-lg xl:pl-[6vw] px-4 py-1 xl:h-[5vw] h-[6vh] lg:h-[5vh] rounded-full border border-gray-300  focus:outline-none focus:border-blue-500"
                      placeholder="Enter Your Mail"
                    />
                    <button
                      type="submit"
                      className="bg-[#FF4902] text-white sm:text-lg text-base  xl:px-8 px-6 py-2 m-1 sm:m-2 2xl:m-3 absolute right-0 top-0 bottom-0 flex items-center rounded-full	"
                    >
                      {loading ? (
                        <>
                          <p>Sending</p>
                          <Loader2 className="animate-spin ml-2" />
                        </>
                      ) : (
                        <p>Join Alpha</p>
                      )}
                    </button>
                  </div>
                </form>
                <div className="mb-5 mt-3 sm:mt-0 text-justify text-[3.5vw] ml-3 sm:text-[1.8vw] xl:text-[1.1vw]   font-light text-black  xl:p-2">
                  <p
                    className={`min-h-[4vw] sm:min-h-[1.8vw] ${
                      succmsg.startsWith("*") ? "text-red-600 font-normal" : ""
                    }`}
                  >
                    {succmsg}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-2/5 relative flex justify-center">
            <Image
              src={iPhone}
              alt="Explore Image"
              className=" lg:w-full lg:p-5 sm:w-[75%] w-[90%] object-bottom object-contain -mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
