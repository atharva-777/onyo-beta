import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import c1 from "../../public/images/video.png";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

const Adventure = React.forwardRef<HTMLIFrameElement>((props, ref) => {
  return (
    <div className={josefinSans.className}>
      <div className="text-center  flex flex-col items-center justify-center md:p-10 p-3 mx-auto">
        <h1 className="text-xl xl:text-3xl 2xl:text-4xl xl:px-[18vh]  font-bold tracking-wide text-[#191825] mb-2 xl:mb-4">
          YOLIDAY ADVENTURES UNVEILED: A JOURNEY THROUGH SHARED EXPERIENCES
        </h1>
        <iframe
          className=" lg:w-[90%] w-[95%] h-[47vw] my-10"
          id="adventures"
          ref={ref}
          src="https://www.youtube.com/embed/cbixo8xttdw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
});
Adventure.displayName = "Adventure";

export default Adventure;
