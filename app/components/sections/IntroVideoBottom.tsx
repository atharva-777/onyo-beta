"use client"

import { useState } from 'react';

const IntroVideoBottom = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="mt-28" id="intro-video">
      <div className="relative group mx-5 h-96 rounded-2xl md:mx-10 lg:mx-56 lg:h-[500px]">
        {/* Video Section */}
        <video
          className="z-0 absolute inset-0 h-full w-full rounded-3xl object-cover"
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause} // Optional: Handle video end to show text again
        >
          <source src="/videos/hero-section-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Above the Square */}
         
          <div className={`${
            isPlaying ? "opacity-0": "opacity-100"} group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black to-transparent bg-opacity-80 rounded-t-3xl pt-8 pb-2 absolute top-0 left-0 w-full z-10 flex flex-col items-center`}>
            <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
              Yoliday Adventures Unveiled
            </h2>
            <p className="lg:text-md mt-2 text-sm text-white md:text-lg">
              Sail through the voyage of shared experience
            </p>
          </div>
        
      </div>
    </section>
  );
};

export default IntroVideoBottom;
