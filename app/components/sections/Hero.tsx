import Link from "next/link";
import React from "react";
import InfoButton from "../InfoButton";

function Hero() {
  return (
    <div className="max-w-screen relative h-80 md:h-screen" id="hero">
      <div className="absolute inset-0 z-0">
        <video
          className="h-80 w-screen object-cover md:h-screen"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source src="/videos/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex h-80 flex-col items-start justify-center bg-black bg-opacity-50 px-8 pt-14 text-white md:h-screen md:pl-10 lg:pl-24">
        <h1 className="text-left text-xl font-medium md:text-5xl md:font-medium">
          Discover, Create, and Share <br className="hidden md:block" />
          Unforgettable Experiences
        </h1>
        <p className="mb-5 mt-2 text-start text-sm font-normal md:text-xl lg:mb-20">
          Whether you&apos;re a foodie, a mountaineer, or a beach lover,{" "}
          <br className="hidden md:block" />
          Yoliday connects you with like-minded adventurers.
        </p>
        <div className="flex w-fit items-center justify-center gap-2">
          <Link href={"/beta-signup"}>
            <div className="rounded-full bg-gradient-linear px-5 py-3 font-semibold lg:px-12 lg:py-5">
              Join Beta Testing
            </div>
          </Link>
          <InfoButton />
        </div>
        <div className="absolute bottom-5 right-8 hidden md:flex">
          <div className="-mr-2 text-right font-extralight">
            Explore <br /> Now
          </div>
          <div>
            <svg
              width="46"
              height="67"
              viewBox="0 0 46 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.03638 48.3663C8.36395 51.6808 23.0191 59.9167 23.0191 66.345"
                stroke="white"
                strokeOpacity="0.7"
                strokeLinecap="round"
              />
              <path
                d="M45.0017 48.3663C37.6741 51.6808 23.019 59.9167 23.019 66.345"
                stroke="white"
                strokeOpacity="0.7"
                strokeLinecap="round"
              />
              <line
                x1="22.6038"
                y1="0.735352"
                x2="22.6038"
                y2="66.3462"
                stroke="white"
                strokeOpacity="0.7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
