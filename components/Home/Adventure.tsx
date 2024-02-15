import Image from "next/image";
import c1 from "../../public/images/video.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
export default function Adventure() {
  return (
    <div className={josefinSans.className}>
      <div className="text-center flex flex-col items-center justify-center md:p-10 mx-auto">
        <h1 className="text-3xl 2xl:text-4xl  lg:text-4xl font-bold tracking-wide text-black mb-4">
          YOLIDAY ADVENTURES UNVEILED: A JOURNEY THROUGH SHARED EXPERIENCES
        </h1>
        <Image src={c1} className="lg:pl-10 w-screen" alt="Home Background" />
      </div>
    </div>
  );
}
