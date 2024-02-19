"use client";
import { useState } from "react";
import logo from "../../public/images/logo2.png";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});
export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  return (
    <>
      <nav className="">
        <div className="w-screen flex flex-wrap items-center flex-row  p-2 bg-white z-10">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 xl:rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavbarVisible ? "true" : "false"}
            onClick={toggleNavbar}
            title=""
          >
            <svg
              className="w-5 h-5"
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

          <a className="xl:w-[17vh] 2xl:w-[15vh] w-[13vh] md:w-1/6 mx-2 xl:mx-5 xl:ml-[3.5rem]">
            <Image src={logo} alt="Flowbite Logo" />
          </a>
          <div className="right-0 xl:hidden ml-auto flex items-end ">
            <button className="ml-auto xl:hidden bg-[#FF4902] rounded-sm text-white px-4   py-2 xl:px-6 xl:py-3 xl:rounded-full">
              Sign Up
            </button>
          </div>
          <div
            className={` xl:block w-5/6 flex xl:justify-end  ${
              isNavbarVisible ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <div className={dm.className}>
              <ul className="font-medium flex-col p-4 md:p-0 mt-4 flex xl:justify-end border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                <li>
                  <a
                    href="#"
                    className="block 2xl:text-lg xl:text-base text-base mt-3  lg-mt:2 w-[18vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block 2xl:text-lg xl:text-base text-base mt-3  lg-mt:2 w-[18vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block 2xl:text-lg xl:text-base text-base mt-3  lg-mt:2 w-[18vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <button className="bg-[#FF4902] rounded-sm 2xl:text-lg text-base  w-[7vw] hidden xl:block text-white px-4 py-2  mt-3 lg:mt-1  rounded-full	">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
