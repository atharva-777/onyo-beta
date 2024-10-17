import createExpAppScreen from "../../assets/images/create-experience.png";
import chatAppScreen from "../../assets/images/chat.png";
import bookingAppScreen from "../../assets/images/booking.png";
import { BookIcon, ChatIcon, PenIcon, SearchIcon } from "../Icons";
import AppScreenShot from "../../assets/images/yoliday app home screen.png";
import Link from "next/link";

function HowItWorks() {
  return (
    <section className="mx-5 mt-8 flex flex-col items-center md:mt-10 lg:mt-20">
      <h2 className="text-2xl font-medium text-black text-opacity-80">
        How it works
      </h2>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col">
          <h3 className="flex font-semibold">
            <div className="size-6">
              <SearchIcon />
            </div>
            Discover Your Experience
          </h3>
          <p className="pl-6 lg:w-80">
            Explore unique experiences, from guided tours and cultural journeys
            to adventure treks and food tastings.
          </p>
        </div>
        <img
          className="mt-5 h-[500px] object-cover lg:mt-0"
          src={AppScreenShot.src}
        ></img>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row-reverse md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col">
          <h3 className="flex font-semibold">
            <div className="size-6">
              <PenIcon />
            </div>
            Create Your Own Experience
          </h3>
          <p className="pl-6 lg:w-80">
            Have a unique adventure in mind? Easily create and share your own
            experience for others to join.
          </p>
        </div>
        <img
          className="mt-5 h-[500px] object-cover lg:mt-0"
          src={createExpAppScreen.src}
        ></img>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col">
          <h3 className="flex font-semibold">
            <div className="size-6">
              <BookIcon />
            </div>
            Book with Ease
          </h3>
          <p className="pl-6 lg:w-80">
            Choose your perfect experience, confirm your spot in just a few
            clicks.
          </p>
        </div>
        <img
          className="mt-5 h-[500px] object-cover lg:mt-0"
          src={bookingAppScreen.src}
        ></img>
      </div>
      <div className="mt-10 flex flex-col items-center md:flex-row-reverse md:gap-40 lg:gap-56">
        <div className="flex flex-col">
          <h3 className="flex font-semibold">
            <div className="size-6">
              <ChatIcon />
            </div>
            Connect with Fellow Explorers
          </h3>
          <p className="pl-6 lg:w-80">
            Meet like-minded adventurers and share insights before you embark on
            your journey.
          </p>
        </div>
        <img
          className="mt-5 h-[500px] object-cover lg:mt-0"
          src={chatAppScreen.src}
          alt=""
        ></img>
      </div>
      <Link href={"/beta-signup"}>
        <button className="mt-20 rounded-full bg-gradient-linear px-8 py-4 font-medium text-white">
          Join Beta Testing
        </button>
      </Link>
    </section>
  );
}

export default HowItWorks;
