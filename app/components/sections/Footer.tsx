import React from "react";
import { FacebookIcon, InstagramIcon } from "../Icons";
import { Mail } from "lucide-react";
import yolidayLogoWhite from "../../assets/icons/yoliday-white-logo.png";
const currYear = new Date().getFullYear();
function Footer() {
  return (
    <>
      <footer className="hidden max-w-full items-center justify-between bg-[#373737] px-10 py-2 pt-3 text-white md:flex">
        <div className="flex gap-3">
          <div className="size-6">
            <FacebookIcon />
          </div>

          <div className="size-6">
            <Mail />
          </div>
          <div className="size-6">
            <InstagramIcon />
          </div>
        </div>
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
          <div className="flex gap-3">
            <div className="size-6">
              <FacebookIcon />
            </div>
            <div className="size-6">
              <Mail />
            </div>
            <div className="size-6">
              <InstagramIcon />
            </div>
          </div>
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
