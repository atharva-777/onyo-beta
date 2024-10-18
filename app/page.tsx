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
import experienceImage1 from "./assets/images/experiences-1.jpg";
import experienceImage2 from "./assets/images/experiences-2.jpg";
import experienceImage3 from "./assets/images/experiences-3.jpg";
import footerBgImage from "./assets/images/desktop-footer-bg.png";
import mobileFooterImg from "./assets/images/mobile-footer-bg.png";
import Link from "next/link";
import { px } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <section className="mt-40 flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-40 lg:gap-56">
        <div className="flex flex-col items-center gap-3">
          <Activities />
          <div className="text-gray-500">And much more</div>
          <div>
            <AppStoreButton />
          </div>
        </div>
        <div className="circle-bg">
          <Image
            src={AppScreenShot.src}
            alt="Sample img"
            className="h-[500px] object-cover"
            width={250}
            height={500}
          />
        </div>
      </section>
      <Experiences />
      <section className="mx-5 mt-20 md:mx-10 lg:mx-20">
        <div className="mb-5 flex flex-col justify-between lg:flex-row lg:items-center">
          <p className="text-4xl text-gray-700 text-opacity-80">
            A unique blend of experiences
          </p>
          <p className="text-sm lg:w-96 lg:text-right">
            Discover a fusion of adventure. culture. and scenic beauty across
            our diverse places. offering unforgettable & untapped experiences at
            every turn.
          </p>
        </div>
        <div className="mb-2 h-48 md:mb-5 lg:h-80">
          <img
            className="size-full rounded-3xl object-cover"
            src={experienceImage3.src}
            alt=""
          />
        </div>
        <div className="flex h-48 max-w-full gap-2 overflow-hidden rounded-3xl lg:h-80 lg:flex-row lg:gap-5">
          <img
            className="w-1/2 rounded-3xl object-cover lg:w-4/6 lg:flex-grow"
            src={experienceImage2.src}
            alt=""
          />
          <img
            className="w-1/2 rounded-3xl object-cover lg:w-2/6"
            src={experienceImage1.src}
            alt=""
          />
        </div>
      </section>
      <HowItWorks />
      <section className="mt-28" id="intro-video">
        <div className="relative mx-5 h-96 rounded-2xl md:mx-10 lg:mx-56 lg:h-[500px]">
          {/* Video Section */}
          <video
            className="h-full w-full rounded-3xl object-cover"
            controls
            muted
          >
            <source src="/videos/hero-section-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Above the Square */}
          <div className="absolute left-0 right-0 top-8 z-10 flex flex-col items-center">
            <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
              Yoliday Adventures Unveiled
            </h2>
            <p className="lg:text-md mt-2 text-sm text-white md:text-lg">
              Sail through the voyage of shared experience
            </p>
          </div>

          {/* White Border Square Overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-128 md:w-256 relative top-10 h-56 rounded-lg border-4 border-white md:h-64 lg:h-[300px] lg:w-[800px]"></div>
          </div>
        </div>
      </section>

      {/* <section className="mt-28" id="intro-video">
        <div className="mx-5 h-96 rounded-2xl md:mx-10 lg:mx-56 lg:h-[500px]">
          <video
            className="h-full w-full rounded-3xl object-cover"
            controls
            muted
          >
            <source src="/videos/hero-section-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}
      <section className="mx-5 mt-20 rounded-3xl md:mx-10 lg:mx-56">
        <div className="relative flex h-96 w-full flex-col justify-end lg:h-[500px]">
          <img
            className="absolute left-0 top-0 -z-20 hidden h-full w-full rounded-3xl object-cover hover:cursor-pointer lg:block lg:h-full"
            src={footerBgImage.src}
            alt=""
          />
          <img
            className="absolute left-0 top-0 -z-20 block h-full w-full rounded-3xl object-cover hover:cursor-pointer lg:hidden lg:h-full"
            src={mobileFooterImg.src}
            alt=""
          />

          <div className="mx-5 mb-10 flex max-w-64 flex-col items-start justify-center md:max-w-96 lg:mx-10 lg:max-w-[500px]">
            <div className="w-full text-2xl text-white lg:text-4xl">
              Team up with like-minded adventurers, join their Experience, or
              create your own.
            </div>
            <Link href="/beta-signup">
              <button className="mt-5 rounded-full bg-white px-4 py-2 font-semibold text-black lg:px-12 lg:py-5">
                Join Beta Testing
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <AppStoreButton />
        </div>
      </section>

      <Faqs />
      <Footer />
    </div>
  );
}
