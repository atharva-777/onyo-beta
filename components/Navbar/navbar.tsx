"use client";
import { useState } from "react";
import logo from "../../public/images/logo2.png";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import close from "../../public/images/close.png";
const dm = DM_Sans({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});
interface NavbarProps {
  onButtonClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onButtonClick }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const handleAboutYolidayClick = () => {
    toggleNavbar();

    setTimeout(() => {
      onButtonClick();
    }, 100);
  };
  return (
    <>
      {/* <div
        className={`h-screen w-screen absolute bg-black z-20 bg-opacity-40 ${
          isNavbarVisible ? "block" : "hidden"
        }`}
      ></div> */}
      <div className="sticky top-0 z-50 flex flex-wrap items-center flex-row py-2 bg-white">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          aria-controls="navbar-default"
          aria-expanded={isNavbarVisible ? "true" : "false"}
          onClick={toggleNavbar}
          title=""
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm  xl:rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            !isNavbarVisible ? "block" : "hidden"
          }`}
        >
          <svg
            className="w-[4vw] h-[4vw]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a
          className={`xl:w-[17vh] 2xl:w-[15vh] w-[9vh] sm:w-[11vh] xl:mx-5 xl:ml-[4vw] ${
            !isNavbarVisible ? "ml-0 sm:ml-3" : "ml-[3vw]"
          }`}
        >
          <Image src={logo} alt=" Logo" />
        </a>
        {/* mob view */}
        <div className="right-0 xl:hidden ml-auto flex items-end ">
          <button
            className={`text-base ml-auto xl:hidden bg-[#FF4902] rounded-lg text-white  sm:text-lg py-1 px-3   sm:py-2 sm:px-6 xl:py-3 mr-2 xl:mr-0 ${
              !isNavbarVisible ? "block" : "hidden"
            }`}
          >
            Download App
          </button>
          <button
            className={`text-base ml-auto xl:hidden  ${
              isNavbarVisible ? "block" : "hidden"
            }`}
            onClick={toggleNavbar}
          >
            <Image src={close} className="max-h-10 max-w-10" alt="X" />
          </button>
        </div>
        <div
          className={` xl:block w-[100%] xl:w-5/6 flex xl:justify-end  ${
            isNavbarVisible ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <div className={`${dm.className} w-full absolute left-0 xl:relative`}>
            <ul className="font-medium flex-col p-4 px-[5vw] xl:px-0 xl:p-0 w-full  flex xl:justify-end  xl:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0  bg-white">
              <li>
                <a
                  href="#"
                  className="block 2xl:text-lg xl:text-base text-base my-4  xl:mt-4 xl:my-0 xl:ml-[4vw] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </a>
                <hr className="xl:hidden h-px  bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"></hr>
              </li>
              <li>
                <a
                  href="#"
                  className="block 2xl:text-lg xl:text-base text-base my-4   xl:mt-4 xl:my-0 xl:ml-[5vw]  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleAboutYolidayClick}
                >
                  About Yoliday
                </a>
                <hr className="xl:hidden h-px  bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"></hr>
              </li>

              {/* <li>
                  <a
                    href="#"
                    className="block 2xl:text-lg xl:text-base text-base mt-3  lg-mt:2 w-[18vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Experiences
                  </a>
                </li> */}
              <li>
                {/* desktop view */}

                <button className="bg-[#FF4902] xl:rounded-full xl:ml-[3vw] rounded-lg my-4    xl:my-0 sm:text-lg py-1 px-3  sm:py-2 sm:px-3 2xl:text-lg text-base   text-white xl:px-7 xl:py-2  xl:mt-2 	">
                  Download App
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
