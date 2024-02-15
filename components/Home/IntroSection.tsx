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
import Autoplay from "embla-carousel-autoplay";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});
export default function IntroSection() {
  return (
    <div className={poppins.className}>
      <div className="h-screen flex  justify-center">
        {/* Use the Image component */}
        <Image
          src={Homebg}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="absolute xl:mt-[13vh] mt-[9vh]"
        />

        <div className="z-10 text-white flex flex-col xl:flex-row w-screen  ">
          <div className="xl:w-2/3 pl-3  lg:pr-8 xl:ml-14 mt-12 p-5 xl:pt-12  ">
            <div className="flex items-center">
              <h1 className=" mb-9 text-[26px] sm:text-4xl xl:mb-6 2xl:mb-3 lg:mb-5   md:text-4xl lg:text-6xl xl:text-[55px] 2xl:text-[65px] 3xl:text-[90px] font-bold text-black">
                Find your Tribe,
              </h1>
              <Carousel
                opts={{
                  align: "start",
                }}
                orientation="vertical"
                className="inline-block"
                plugins={[
                  Autoplay({
                    delay: 1500,
                  }),
                ]}
              >
                <CarouselContent className="-mt-1 h-20 xl:h-20 sm:h-11 mx-3">
                  {["Explore", "Share", "Connect"].map((word, index) => (
                    <CarouselItem key={index} className="pt-1 n-15">
                      <span
                        className="text-[26px] sm:text-3xl md:text-4xl lg:text-6xl xl:text-[55px] 2xl:text-[65px] 3xl:text-[90px] font-bold text-black"
                        style={{ color: "#FFA500" }}
                      >
                        {word}
                      </span>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <p className="text-1xl lg:text-3xl mt-[-20px] xl:mt-[-22px] md:mt-2 text-slate-600  xl:pt-5 xl:w-4/5 2xl:text-[30px] 3xl:text-[35px]	">
              Connect to like-minded travelers for shared adventures. Create a
              unique experience or join an experiences created by others.
            </p>
          </div>
          <div className="xl:w-2/5 xl:w-[100vh] xl:mt-10  mr-10 2xl:mr-7">
            <Image src={exp} alt="Explore Image" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
}
