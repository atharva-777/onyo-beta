"use client"
import Autoplay from "embla-carousel-autoplay"
import { Loader2 } from "lucide-react"

import p1 from "../../public/images/Places1.png"
import p2 from "../../public/images/Places2.png"
import p3 from "../../public/images/Places3.svg"
import p4 from "../../public/images/Places4.svg"
import p5 from "../../public/images/Places5.svg"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Image from "next/image"
import groupimg from "../../public/images/group.svg"
import explore from "../../public/images/exploret.svg"
import hills from "../../public/images/mountainbg.svg"
import phone2 from "../../public/images/phone2.png"
import Play from "../../public/images/googleplay.png"
import { Inter, Josefin_Sans, Poppins } from "next/font/google"
import s1 from "../../public/images/Set-0.svg"

import s2 from "../../public/images/Set-1.svg"
import s3 from "../../public/images/Set-2.svg"
import { useState } from "react"
interface PopularProps {
  onButtonClick: () => void
}
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
})
const inter = Inter({
  subsets: ["latin"],
})
const poppins = Poppins({
  weight: ["300", "400", "600", "800"], // Example with multiple weights
  style: "normal",
  subsets: ["latin"],
})

interface PopularProps {
  onButtonClick: () => void
}

const Popular: React.FC<PopularProps> = ({ onButtonClick }) => {
  const data = [p1, p2, p3, p4, p5]
  const [email, setEmail] = useState("")
  const [succmsg, setSuccmsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleNotifyMe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      // Email is not in the correct format
      setSuccmsg("*Enter Valid Email")
      return
    }
    try {
      setLoading(true)
      const response = await fetch(process.env.NEXT_PUBLIC_ENDPOINT!!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })

      if (response.ok) {
        setSuccmsg("Thanks. We will reach out to you soon.")
        setLoading(false)
      } else {
        setSuccmsg("Request Failed.")
        setLoading(false)
      }
    } catch (error) {
      setSuccmsg("Request Failed.")
      setLoading(false)
      console.error("Error sending notification request:", error)
    }
  }
  return (
    <>
      <div className="text-center sm:w-3/5 xl:w-4/5 flex flex-col items-center justify-center  mx-auto">
        <div className={poppins.className}>
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-[600] xl:tracking-[4px] tracking-[3px] text-[#FF4902] xl:mb-4 mb-2 font-poppins">
            POPULAR EXPERIENCES
          </h2>
        </div>
        <div className={josefinSans.className}></div>
        <h1 className="text-xl xl:text-3xl 2xl:text-4xl px-2  font-bold tracking-wide text-[#191825] mb-2 xl:mb-4">
          EMBARK ON THRILLING HORIZONS WITH ADVENTURES!
        </h1>
      </div>
      <h3 className="text-lg xl:text-xl xl:w-3/5 mx-auto font-normal text-center  text-slate-500 mb-2">
        Explore, Connect, and Embark on Adventures Together with Yoliday
      </h3>
      <div>
        <div className="flex-row justify-center items-center text-center ">
          {/* <Carousel
            opts={{
              align: "start",
            }}
            className="sm:p-10 "
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className=" w-3/5 sm:w-full ">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" w-1/3 sm:basis-1/3  md:basis-1/3 pl-2 xl:basis-1/5 "
                >
                  <Card className=" " style={{ border: "none" }}>
                    <CardContent
                      className="flex justify-center h-[50vh] xl:h-[60vh] md:h-[30vh] "
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
          </Carousel> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="lg:p-10 sm:py-10"
            plugins={[]}
          >
            <CarouselContent className=" sm:w-[85%] lg:w-full w-[46%] ml-1  ">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/3  md:basis-1/3 pl-2 lg:basis-1/5 "
                >
                  <Card className=" " style={{ border: "none" }}>
                    <CardContent
                      className="flex justify-center  h-[50vh] xl:h-[60vh] md:h-[30vh] "
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
          </Carousel>

          <button
            onClick={onButtonClick}
            className="mx-auto  m-2 bg-[#FF4902] text-white xl:py-4 xl:px-6 py-3 px-4 rounded-md"
          >
            Learn More
          </button>
          <div className="text-center flex flex-col items-center justify-center pt-10 xl:px-20 xl:pt-20 xl:pb-10  mx-auto w-4/5 md:w-3/5">
            <div className={poppins.className}>
              <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-[600] xl:tracking-[4px] tracking-[3px] text-[#FF4902] xl:mb-4 mb-2 font-poppins">
                HOW IT WORKS
              </h2>
            </div>
            <div className={josefinSans.className}>
              <h1 className="text-xl xl:text-3xl 2xl:text-4xl px-2  font-bold tracking-wide text-[#191825] mb-2 xl:mb-4">
                YOLIDAY: WHERE YOUR JOURNEY FINDS ITS TRIBE
              </h1>
            </div>

            <h3 className="text-lg xl:text-xl  mx-auto font-normal  text-slate-500 mb-2">
              Explore, Connect, and Embark on Adventures Together with Yoliday
            </h3>
          </div>

          <div className=" flex  justify-center px-10 pb-20 mt-[10vh]">
            <div className="hidden xl:block w-4/5">
              <Image src={explore} alt="Explore" className=" w-full h-auto" />
            </div>
            <div className="flex flex-wrap xl:hidden">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 p-5">
                <Image src={s1} alt="Set 0" className="w-50" />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0  p-5">
                <Image src={s2} alt="Set 1" className="w-50" />
              </div>
              <div className="w-full flex justify-center lg:w-1/3  p-5">
                <Image src={s3} alt="Set 2" className="w-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF3F2]  xl:mt-[1vh] flex flex-col-reverse xl:flex-row   items-center py-[1.5vw]">
          <div className="xl:w-1/2 sm:w-full flex items-center flex-col">
            <Image
              src={groupimg}
              className="  px-4 w-full  sm:w-3/4"
              alt="Home Background"
            />
            <button
              onClick={onButtonClick}
              className="xl:hidden block bg-[#FF4902] text-white py-3 px-5 xl:py-4 xl:px-6 rounded-md mx-auto my-5"
            >
              Learn More
            </button>
          </div>
          <div className=" xl:w-1/2 xl:py-12 xl:pr-12 px-8 pt-8 text-center xl:text-left sm:px-[15%] xl:px-8">
            <div className={poppins.className}>
              <h2 className="xl:my-5 text-base  xl:text-2xl sm:text-3xl font-semibold xl:font-extrabold xl:tracking-[4px] tracking-[3px] text-[#FF4902] mb-4 font-poppins">
                JOIN YOLIDAY EXPERIENCES
              </h2>
            </div>
            <div className={josefinSans.className}>
              <h1 className=" xl:my-3  text-xl xl:text-3xl sm:text-4xl font-bold tracking-wider flex flex-col  text-[#232233] xl:mb-2">
                WHERE MEMORIES BLOOM
              </h1>{" "}
              <h1 className=" xl:my-3  text-xl xl:text-3xl sm:text-4xl font-bold tracking-wider flex flex-col  text-[#232233]  xl:mb-2">
                LED BY YOUR TRIBE
              </h1>
              <h3 className="text-lg sm:text-3xl xl:text-xl font-normal text-[#6C6C72] mb-5 my-3">
                Yoliday adventures are crafted by fellow explorers, not travel
                bots. These travelbuffs know every hidden gem, every winding
                street, and every must-try dish–and they&apos;re ready to share
                the treasures without you having to hunt them. With Yoliday
                Experiences, you&apos;re not just ticking destinations off a
                list – you&apos;re diving into authentic experiences, building
                friendships..{" "}
              </h3>
            </div>

            <button
              onClick={onButtonClick}
              className="hidden xl:block bg-[#FF4902] text-white py-4 px-6 rounded-md"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="flex flex-col-reverse lg:flex-row md:flex-row pt-10 relative  "
          style={{
            backgroundImage: `url(${hills.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom", // Set to "center bottom"
          }}
        >
          <div className=" md:w-[35%] relative w-screen min-h-[100vw] sm:min-h-0 flex justify-center items-end  mx-auto  xl:ml-0">
            <Image
              src={phone2}
              className="xl:pl-[10vh] absolute max-h-full w-auto object-contain md:pl-[2vh] align-self-end"
              alt="Home Background"
            />
          </div>
          <div className=" sm:mb-0 md:w-[65%] p-4 xl:p-10 sm:pr-10">
            <div className={poppins.className}>
              <h1 className="text-[21px] sm:text-1xl lg:text-4xl xl:text-4xl 2xl:text-[3vw] xl:leading-[50px] 2xl:leading-[3.5vw] lg:leading-[50px] font-semibold tracking-wide text-white  px-2 py-1   xl:p-2">
                Embark on an unforgettable Journey with Yoliday Experiences.
              </h1>
            </div>
            <p className=" text-justify  sm:text-[1.8vw] xl:text-[1.5vw] lg:my-3 font-light text-white  px-2 py-1  xl:p-2">
              Escape the ordinary with hidden waterfalls, late-night bar crawls
              turned karaoke stardom, and glacier conquests fueled by
              high-fives. Say goodbye to FOMO, and hello to Yoliday! Download
              the app - your next adventure awaits!
            </p>
            <p className=" text-justify  sm:text-[1.8vw] xl:text-[1.5vw] lg:my-3 font-light text-white py-1  px-2 xl:p-2">
              Ready for the big reveal? Leave your email and be the first to
              know when our app hits the scene!
            </p>
            {/* <Image
              src={Play}
              alt="google play"
              className="my-5 xl:w-[35vh] w-[17vh]"
            /> */}
            <form className="xl:mt-5 flex " onSubmit={handleNotifyMe}>
              <div className="relative flex align-middle items-stretch w-full lg:w-3/4 mb-0 ">
                <label htmlFor="email" className="sr-only text-lg">
                  Enter Your Mail
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#FF4902"
                  className="xl:w-[3.3vw] lg:w-[3vh] w-[4vh] absolute mt-[1.1vh]  ml-[1.3vh]  xl:mt-[0.9vw]  xl:ml-[1.4vw] "
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
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full pl-[7vh] text-base  sm:text-lg xl:pl-[6vw] px-4 py-1 xl:h-[5vw] h-[6vh] lg:h-[5vh] rounded-full border border-gray-300  focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Mail"
                />
                <button
                  type="submit"
                  className="bg-[#FF4902] text-white sm:text-lg text-base  xl:px-10 px-6 py-2 m-1 sm:m-2 2xl:m-3 absolute right-0 top-0 bottom-0 flex items-center rounded-full	"
                >
                  {loading ? (
                    <>
                      <p>Sending</p>
                      <Loader2 className="animate-spin ml-2" />
                    </>
                  ) : (
                    <p>Get Notified</p>
                  )}
                </button>
              </div>
            </form>
            <div className="mb-5 mt-3 sm:mt-0 text-justify text-[3.5vw] ml-3 sm:text-[1.8vw] xl:text-[1.1vw]   font-light text-white  xl:p-2">
              <p
                className={`min-h-[4vw] sm:min-h-[1.8vw] ${
                  succmsg.startsWith("*") ? "text-red-600 font-normal" : ""
                }`}
              >
                {succmsg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Popular
