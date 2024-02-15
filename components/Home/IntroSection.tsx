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
          <div className="xl:w-2/3 lg:pr-8 ml-14 mt-12 xl:pt-12 ">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-[62px] 2xl:text-[72px] 3xl:text-[90px] font-bold text-black">
              Find your Tribe, <span style={{ color: "#FFA500" }}>Explore</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-slate-600  pt-5 xl:w-4/5 2xl:text-[30px] 3xl:text-[35px]	">
              Connect to like-minded travelers for shared adventures. Create a
              unique experience or join an experiences created by others.
            </p>
          </div>
          <div className="xl:w-2/5 xl:w-[100vh] mr-10 2xl:mr-7">
            <Image src={exp} alt="Explore Image" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
}
