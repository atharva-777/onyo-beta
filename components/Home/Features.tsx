"use client";
import phone from "../../public/images/phone.svg";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import lm from "../../public/images/lm.svg";

import c1 from "../../public/images/Booking.svg";
import c2 from "../../public/images/Sharing.svg";
import c3 from "../../public/images/Traveller.png";
import c4 from "../../public/images/Wagon.png";
import c5 from "../../public/images/Hiking.png";
import c6 from "../../public/images/Plane.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";
interface FeaturesProps {
  onButtonClick: () => void;
}
const poppins = Poppins({
  weight: ["300", "400", "600", "800"], // Example with multiple weights
  style: "normal",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
const inter = Inter({
  subsets: ["latin"],
});
const Features: React.FC<FeaturesProps> = ({ onButtonClick }) => {
  const data = [
    {
      imageUrl: c1,
      heading: "Share Your Experience with all",
      paragraph:
        "Sharing is caring. So, jump in and share your crazy travel experiences with the world.",
    },
    {
      imageUrl: c2,
      heading: "Discover and Join Experiences",
      paragraph:
        "Your next adventure awaits you. Let's get set go & make the best memories!",
    },
    {
      imageUrl: c3,
      heading: "Connect with Like-Minded Travelers",
      paragraph:
        "Join forces with like-minded adventurers and unlock a world of shared experiences1",
    },
    {
      imageUrl: c4,
      heading: "Easy Experience Sharing",
      paragraph:
        "It's as easy as a bee, hop in and read some of the finest trip tips and tricks.",
    },
    {
      imageUrl: c5,
      heading: "Join Yoliday-Curated Experiences",
      paragraph:
        "Ditch the boring itinerary and join in unique travel experiences. ",
    },
    {
      imageUrl: c6,
      heading: "Event Notifications for you",
      paragraph:
        "Miss on nothing with our customized event notifications for you.",
    },
  ];
  return (
    <>
      <div className="xl:mt-10 text-center flex flex-col items-center justify-center w-4/5  xl:p-5 sm:p-2 lg:pt-20 lg:px-20 mx-auto">
        <div className={poppins.className}>
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-[600] xl:tracking-[4px] tracking-[3px] text-[#FF4902] xl:mb-4 mb-2 font-poppins">
            KEY FEATURES
          </h2>
        </div>
        <div className={josefinSans.className}>
          <h1 className="text-xl xl:text-3xl 2xl:text-4xl px-2  font-bold tracking-wide text-[#191825] mb-2 xl:mb-4">
            DISCOVER, SHARE, AND EXPLORE TOGETHER IN THE ULTIMATE SEEKERS
            COMMUNITY
          </h1>
        </div>
        <h3 className="text-lg xl:text-xl xl:w-3/5 mx-auto font-normal  text-slate-500 mb-2">
          Ladies and Gentlemen! Fasten your seatbelt as we embark on a new
          experience with Yoliday.
        </h3>
        <div className={poppins.className}>
          <a
            className="text-lg  text-[#FF4902] xl:mb-4 mb-2 font-poppins"
            onClick={onButtonClick}
          >
            Learn More
            <Image src={lm} alt={`leranmore`} className="inline-block ml-2" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row  items-center">
        <div className="lg:pl-12 xl:w-1/3 sm:w-2/5 md:w-2/5  w-[70%]  p-10">
          <Image
            src={phone}
            alt="Home Background"
            className="lg:pl-10 xl:w-[55vh] "
          />
        </div>
        <Carousel
          className="lg-3/5 xl:w-2/3  sm:w-3/5 max-w-full  "
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className=" xl:p-20 py-10 mx-12 sm:py-2 xl:w-auto lg:w-4/5 sm:mx-2 sm:w-auto ">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-2/3 xl:basis-2/5 basics-1/1 align-middle my-auto py-3 card rounded-3xl p1-10 sm:pl-5"
              >
                <Card
                  className="xl:h-[38vw] 2xl:h-[37vw] h-[125vw] sm:h-[58vw] lg:h-[45vw] rounded-3xl flex align-middle my-auto transition duration-300 transform xl:hover:shadow-[0_50px_70px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)]"
                  style={{ border: "none" }}
                >
                  <CardContent className="rounded-3xl px-12 sm:px-7  grid justify-items-center align-middle my-auto text-center xl:px-9 2xl:px-[1.9vw]">
                    <Image
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="2xl:w-auto xl:w-auto xl:min-h-[10vw] 2xl:min-h-[23vh] 2xl:my-9 xl:my-6 object-cover"
                    />
                    <div className={inter.className}>
                      <h3 className="	  my-4 xl:my-2 text-2xl  sm:text-[2.8vw] xl:text-[1.8vw] font-extrabold m-3 font-poppins">
                        {item.heading}
                      </h3>
                    </div>
                    <p className="text-gray-600 my-3 xl:my-5 2xl:text-[1vw]">
                      {item.paragraph}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
export default Features;
