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
import c1 from "../../public/images/Booking.svg";
import c2 from "../../public/images/Sharing.svg";

export default function Features() {
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
      imageUrl: c2,
      heading: "Connect with Like-Minded Travelers",
      paragraph:
        "Join forces with like-minded adventurers and unlock a world of shared experiences1",
    },
    {
      imageUrl: c2,
      heading: "Easy Experience Sharing",
      paragraph:
        "It's as easy as a bee, hop in and read some of the finest trip tips and tricks.",
    },
    {
      imageUrl: c2,
      heading: "Join Yoliday-Curated Experiences",
      paragraph:
        "Ditch the boring itinerary and join in unique travel experiences.",
    },
    {
      imageUrl: c2,
      heading: "Event Notifications for you",
      paragraph:
        "Miss on nothing with our customized event notifications for you.",
    },
  ];
  return (
    <>
      <div className="text-center flex flex-col items-center justify-center  p-20 mx-auto">
        <h2 className="text-xl lg:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
          KEY FEATURES
        </h2>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-widest text-black mb-4">
          DISCOVER, SHARE, AND JOURNEY TOGETHER IN THE ULTIMATE TRAVEL COMMUNITY
        </h1>

        <h3 className="text-lg lg:text-2xl w-3/5 font-light text-black mb-2">
          Ladies and Gentlemen! Fasten your seatbelt because as we embark on a
          new trip with Yoliday.
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row w-screen lg:p-12 items-center">
        <Image
          src={phone}
          className="lg:pl-10 lg:w-[75vh] md:w-1/2"
          alt="Home Background"
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-1/2 md:w-1/2 sm:w-1/2 lg:w-3/5 "
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className=" md:basis-2/3 lg:basis-2/5">
                <Card
                  className="card transition duration-300 transform hover:drop-shadow-2xl "
                  style={{ border: "none" }}
                >
                  <CardContent className="  lg:h-[80vh] pt-[10vh] pb-[10vh] grid justify-items-center text-center	">
                    <Image
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="mb-4 w-32 h-32 object-cover"
                    />
                    <h3 className="text-xl font-extrabold m-3 font-poppins">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600">{item.paragraph}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>{" "}
      </div>
    </>
  );
}
