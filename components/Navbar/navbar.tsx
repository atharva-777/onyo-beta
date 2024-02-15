"use client";
import { useState } from "react";
import logo from "../../public/images/logo2.png";
import Image from "next/image";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  return (
    <>
      <nav className="bg-zinc-50">
        <div className="w-screen flex flex-wrap items-center flex-row  p-4">
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

          <a className="xl:w-[15vh] w-[10vh] md:w-1/6 mx-2 xl:mx-5">
            <Image src={logo} alt="Flowbite Logo" />
          </a>
          <div className="right-0 xl:hidden ml-auto flex items-end ">
            <button className="ml-auto xl:hidden bg-orange-500 text-white px-6 py-3 xl:rounded-full">
              Sign Up
            </button>
          </div>
          <div
            className={` xl:block w-5/6 flex xl:justify-end  ${
              isNavbarVisible ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex-col p-4 md:p-0 mt-4 flex xl:justify-end border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <a
                  href="#"
                  className="block  mt-3  lg-mt:2 w-[20vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block   mt-3 lg-mt:2 w-[20vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  mt-3 lg-mt:2 w-[20vh] px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Experiences
                </a>
              </li>
              <li>
                <button className="bg-orange-500 w-[20vh] hidden xl:block text-white px-4 py-2  mt-3 lg:mt-1  rounded-full	">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
