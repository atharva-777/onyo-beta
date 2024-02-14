import Image from "next/image";
import c1 from "../../public/images/video.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
export default function Adventure() {
  return (
    <div className={josefinSans.className}>
      <div className="text-center flex flex-col items-center justify-center md:p-20 mx-auto">
        <h3 className=" p-5 text-2xl lg:text-4xl md:text-3xl font-bold tracking-wider text-black mb-4">
          YOLIDAY ADVENTURES UNVEILED: A JOURNEY THROUGH SHARED EXPERIENCES
        </h3>
        <Image src={c1} className="lg:pl-10 w-screen" alt="Home Background" />
      </div>
    </div>
  );
}
