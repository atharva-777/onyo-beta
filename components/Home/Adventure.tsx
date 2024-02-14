import Image from "next/image";
import c1 from "../../public/images/video.png";
export default function Adventure() {
  return (
    <>
      <div className="text-center flex flex-col items-center justify-center  p-20 mx-auto">
        <h3 className="text-4xl lg:text-4xl md:text-3xl font-bold tracking-widest text-black mb-4">
          YOLIDAY ADVENTURES UNVEILED: A JOURNEY THROUGH SHARED EXPERIENCES
        </h3>
        <Image src={c1} className="lg:pl-10 w-screen" alt="Home Background" />
      </div>
    </>
  );
}
