import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../Icons";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideFacebook,
  Mail,
  Youtube,
} from "lucide-react";
import yolidayLogoWhite from "../../assets/icons/yoliday-white-logo.png";
import Image from "next/image";

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <footer className="hidden max-w-full items-center justify-between bg-[#373737] px-10 py-2 pt-3 text-white md:flex">
        <Socials />
        <div className="flex items-end justify-center gap-2">
          <img className="h-8 object-cover" src={yolidayLogoWhite.src}></img>
          <span className="text-sm font-bold">
            Don&apos;t just dream it, Yoliday-it!
          </span>
        </div>
        <div className="text-xs">&copy; {currYear} All Rights Reserved</div>
      </footer>
      <footer className="flex w-full items-center justify-between gap-3 bg-[#373737] px-4 py-2 pt-3 text-white md:hidden">
        <div className="flex flex-col gap-3">
          <Socials />
          <div className="text-xs">&copy; {currYear} All Rights Reserved</div>
        </div>

        <div className="flex flex-col items-end justify-end gap-2">
          <img
            className="h-8 object-cover"
            src={yolidayLogoWhite.src}
            alt=""
          ></img>
          <span className="text-right text-sm font-bold">
            Don&apos;t just dream it, Yoliday-it!
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

function Socials() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5">
      <a
        href="https://www.facebook.com/yoliday.in/"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 16.875H20.625L21.875 11.875H17.5V9.375C17.5 8.0875 17.5 6.875 20 6.875H21.875V2.675C21.4675 2.62125 19.9287 2.5 18.3037 2.5C14.91 2.5 12.5 4.57125 12.5 8.375V11.875H8.75V16.875H12.5V27.5H17.5V16.875Z"
            fill="white"
          />
        </svg>
      </a>

      <a
        href="mailto:hello@yoliday.in"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM15 16.25L5 10V22.5H25V10L15 16.25ZM15 13.75L25 7.5H5L15 13.75ZM5 10V7.5V22.5V10Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/yoliday.in/"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="http://linkedin.com/company/yoliday-in"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.67481 6.24979C8.67447 6.91283 8.41076 7.54858 7.94169 8.01719C7.47261 8.48579 6.8366 8.74887 6.17356 8.74854C5.51051 8.7482 4.87476 8.48449 4.40615 8.01542C3.93755 7.54634 3.67447 6.91033 3.67481 6.24729C3.67514 5.58424 3.93885 4.94849 4.40792 4.47988C4.877 4.01128 5.51301 3.7482 6.17605 3.74854C6.8391 3.74887 7.47485 4.01258 7.94346 4.48165C8.41206 4.95073 8.67514 5.58674 8.67481 6.24979ZM8.74981 10.5998H3.7498V26.2498H8.74981V10.5998ZM16.6498 10.5998H11.6748V26.2498H16.5998V18.0373C16.5998 13.4623 22.5623 13.0373 22.5623 18.0373V26.2498H27.4998V16.3373C27.4998 8.62478 18.6748 8.91229 16.5998 12.6998L16.6498 10.5998Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/channel/UCu52zXBWGDIrBaZgUuaAgHg"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 576 512"
        >
          <path
            fill="#ffffff"
            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
          />
        </svg>
      </a>
    </div>
  );
}
