import Activities from "./components/Activities";
import AppStoreButton from "./components/AppStoreButton";
import Faqs from "./components/sections/Faqs";
import Footer from "./components/sections/Footer";
import HowItWorks from "./components/sections/HowItWorks";
import Experiences from "./components/sections/Experiences";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Image from "next/image";

{
  /** Import images */
}
import AppScreenShot from "./assets/images/yoliday app home screen.png";
import Link from "next/link";
import IntroVideoBottom from "./components/sections/IntroVideoBottom";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <section className="mx-5 mt-24 flex flex-col-reverse items-center justify-center gap-10 md:mx-10 md:mt-40 md:flex-row md:gap-20 lg:mx-20 lg:gap-40">
        <div className="flex w-full flex-col items-center gap-3 md:w-1/2">
          <Activities />
          <div className="text-sm text-gray-500">And much more</div>
          {/* <div>
            <AppStoreButton />
          </div> */}
        </div>
        <div className="circle-bg">
          <Image
            src={AppScreenShot}
            alt="Sample img"
            className="h-[500px] object-cover"
            width={250}
            height={500}
          />
        </div>
      </section>
      <Experiences />
      <IntroVideoBottom />

      <HowItWorks />

      <section className="mx-5 mt-20 rounded-3xl md:mx-10 lg:mx-56">
        <div className="footer-image relative flex h-96 w-full flex-col justify-end rounded-3xl lg:h-[500px]">
          <div className="mx-5 mb-10 flex max-w-64 flex-col items-start justify-center md:max-w-96 lg:mx-10 lg:max-w-[500px]">
            <div className="w-full text-2xl text-white lg:text-4xl">
              Team up with like-minded adventurers, join their Experience, or
              create your own.
            </div>
            <Link href="/beta-signup" className="mt-5">
              <div className="rounded-full bg-white px-5 py-3 font-semibold text-black lg:px-12 lg:py-5">
                Join Beta Testing
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="mt-10 flex items-center justify-center">
          <AppStoreButton />
        </div> */}
      </section>

      <Faqs />
      <Footer />
    </div>
  );
}
