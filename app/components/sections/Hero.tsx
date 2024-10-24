import Link from "next/link";
import React from "react";

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
            <div className="rounded-full bg-gradient-linear px-4 py-2 lg:px-12 lg:py-5">
              Join Beta Testing
            </div>
          </Link>
          <div className="group relative w-fit">
            <button className="mx-1 size-6 rounded-full border-2 border-gray-400 font-mono text-xs text-gray-400">
              i
            </button>
            <p className="absolute -bottom-5 left-9 hidden min-w-24 rounded-lg bg-black bg-opacity-50 px-2 py-1 text-[8px] font-light text-white group-hover:block md:-bottom-3 md:w-52 md:text-xs lg:w-56">
              Be one of the first to try our app and help us make it better by
              sharing your feedback!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
