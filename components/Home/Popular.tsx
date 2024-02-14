import p1 from "../../public/images/Places1.png";
import p2 from "../../public/images/Places2.png";
import p3 from "../../public/images/Places3.png";
import p4 from "../../public/images/Places4.png";
import p5 from "../../public/images/Places5.png";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";
import groupimg from "../../public/images/group.svg";
import explore from "../../public/images/exploret.png";
import hills from "../../public/images/mountainbg.svg";
import phone2 from "../../public/images/phone2.png";
import Play from "../../public/images/googleplay.png";
export default function Popular() {
  const data = [p1, p2, p3, p4, p5];

  return (
    <>
      <div className="flex-row justify-center items-center text-center ">
        <Carousel
          opts={{
            align: "start",
          }}
          className=""
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="!basics-1/3 !sm:basis-1/3 md:basis-1/3 lg:basis-1/5 "
              >
                <Card
                  className="card transition duration-300 transform hover:drop-shadow-2xl"
                  style={{ border: "none" }}
                >
                  <CardContent
                    className="flex justify-center h-[50vh] lg:h-[80vh] md:h-[80vh]   pt-[10vh] pb-[10vh] "
                    style={{
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "contain", // Use 'cover' to ensure the image covers the entire container
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center", // Center the background image both horizontally and vertically
                    }}
                  ></CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <button className="m-5 bg-orange-500 text-white py-2 px-4 rounded-md">
          Explore More
        </button>
        <div className="text-center flex flex-col items-center justify-center  p-20 mx-auto w-3/5">
          <h2 className="text-xl lg:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
            HOW IT WORKS
          </h2>

          <h1 className="text-4xl lg:text-5xl font-bold tracking-widest text-black mb-4">
            YOLIDAY: WHERE YOUR JOURNEY FINDS ITS TRIBE
          </h1>

          <h3 className="text-lg lg:text-2xl w-3/5 font-light text-black mb-2">
            Explore, Connect, and Embark on Adventures Together with Yoliday
          </h3>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-4/5">
            <Image src={explore} alt="Explore" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFF3F2] flex flex-col lg:flex-row md:flex-row w-screen lg:p-12 items-center ">
        <Image
          src={groupimg}
          className="lg:pl-10 lg:w-1/2 md:w-1/1"
          alt="Home Background"
        />
        <div className=" lg:w-1/2 md:w-1/1  p-5 ">
          <h2 className="text-xl lg:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
            JOIN YOLIDAY EXPERIENCES
          </h2>

          <h1 className="text-4xl lg:text-4xl font-bold tracking-widest flex flex-col space-y-8 text-black mb-4">
            WHERE MEMORIES BLOOM LED Y YOUR TRIBE
          </h1>

          <h3 className="text-lg lg:text-2xl font-light text-black mb-2">
            Yoliday curates adventures crafted by fellow explorers, not travel
            bots. These ‘people’ know every hidden gem, every winding street,
            and every must-try dish – and they're ready to share their insider
            knowledge with you. With Yoliday Experiences, you're not just
            ticking destinations off a list – you're diving into authentic
            experiences, building friendships..{" "}
          </h3>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row md:flex-row w-screen relative lg:min-h-[100vh] md:min-h-[50vh]"
        style={{
          backgroundImage: `url(${hills.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="lg:w-1/3 md:w-1/3 ">
          <Image
            src={phone2}
            className="  pt-10 lg:pl-[20vh] lg:w-[70vh] md:w-[25vh] md:pl-[2vh] absolute bottom-0 "
            alt="Home Background"
          />
        </div>
        <div className="lg:w-2/3 md:w-2/3 p-10 lg:pt-[15vh]">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-widest text-white mb-4 p-2">
            Embark on Unforgettable Journeys with Yoliday Experiences.
          </h1>

          <h3 className="text-lg lg:text-2xl font-light text-white mb-2  p-2">
            Escape the ordinary with hidden waterfalls, late-night bar crawls
            turned karaoke stardom, and glacier conquests fueled by high-fives.
            Say goodbye to FOMO, and hello to Yoliday! Download the app - your
            next adventure awaits!
          </h3>
          <Image src={Play} alt="google play" className=" p-2 my-" />
          <form className="">
            <div className="relative flex items-stretch lg:w-1/2 ">
              <label htmlFor="email" className="sr-only">
                Enter Your Mail
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="orange"
                className="w-9 h-9 absolute mt-2   ml-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <input
                type="text"
                id="email"
                name="email"
                className="w-full pl-[7vh] lg:pl-[11vh] px-4 py-2 lg:h-[8vh] h-[5vh] rounded-full border border-gray-300  focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Mail"
              />
              <button className="bg-orange-500 text-white px-4 py-2 m-1 absolute right-0 top-0 bottom-0 flex items-center rounded-full	">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
