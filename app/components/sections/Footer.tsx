import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../Icons";
import { Mail } from "lucide-react";
import yolidayLogoWhite from "../../assets/icons/yoliday-white-logo.png";

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <footer className="hidden max-w-full items-center justify-between bg-[#373737] px-10 py-2 pt-3 text-white md:flex">
        <Socials />
        <div className="flex items-end justify-center gap-2">
          <img className="h-8 object-cover" src={yolidayLogoWhite.src}></img>
          <span className="text-sm font-bold">
            Don't just dream it, Yoliday-it!
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
          <img className="h-8 object-cover" src={yolidayLogoWhite.src}></img>
          <span className="text-right text-sm font-bold">
            Don't just dream it, Yoliday-it!
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

function Socials() {
  return (
    <div className="flex items-center justify-center gap-3 lg:gap-5">
      <a
        href="https://www.facebook.com/yoliday.in/"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <FacebookIcon />
      </a>

      <a
        href="mailto:hello@yoliday.in"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <Mail />
      </a>
      <a
        href="https://www.instagram.com/yoliday.in/"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <InstagramIcon />
      </a>
      <a
        href="http://linkedin.com/company/yoliday-in"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <LinkedinIcon />
      </a>
      <a
        href="https://www.youtube.com/channel/UCu52zXBWGDIrBaZgUuaAgHg"
        target="_blank"
        className="flex size-6 items-center justify-center"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
}
