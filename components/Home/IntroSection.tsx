import Image from "next/image";
import Homebg from "../../public/images/homepagebg.png";
import exp from "../../public/images/exploreimages.png";
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
          <div className="xl:w-3/5 lg:pr-8 m-10  xl:pt-12 ">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-black">
              Find your Tribe, <span style={{ color: "#FFA500" }}>Explore</span>
            </h1>
            <p className="text-1xl sm:text-2xl text-slate-600  pt-5 xl:w-4/5	">
              Connect to like-minded travelers for shared adventures. Create a
              unique experience or join an experiences created by others.
            </p>
          </div>
          <div className="xl:w-2/5 lg:w-[100%] ">
            <Image src={exp} alt="Explore Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
