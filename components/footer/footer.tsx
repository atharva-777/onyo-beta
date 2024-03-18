import logo from "../../public/images/logo.png"
import Image from "next/image"
import em from "../../public/images/em.svg"
import ig from "../../public/images/ig.svg"
import lin from "../../public/images/in.svg"
import fb from "../../public/images/fb.svg"
import yt from "../../public/images/youtube.svg"

import { Be_Vietnam_Pro } from "next/font/google"
const beviet = Be_Vietnam_Pro({
  weight: ["300", "400", "900"],
  style: "normal",
  subsets: ["latin"],
})

export default function Footer() {
  return (
    <>
      <footer className="bg-[#373737] text-white sm:px-[2vh] sm:py-[vh] flex flex-col sm:flex-row">
        <div className="footer-section flex flex-col justify-center items-center sm:w-1/3 order-2 sm:order-1 sm:my-1">
          <div className="flex space-x-5 xl:space-x-6 my-3">
            <a href="https://www.facebook.com/yoliday.in/">
              <Image src={fb} alt="Facebook" className="h-6  xl:h-7 w-auto" />
            </a>
            <a href="mailto:hello@yoliday.in">
              <Image src={em} alt="Email" className="h-6 xl:h-7 w-auto" />
            </a>
            <a href="http://linkedin.com/company/yoliday-in">
              <Image src={lin} alt="LinkedIn" className="h-6 xl:h-7 w-auto" />
            </a>
            <a href="https://www.instagram.com/yoliday.in/">
              <Image src={ig} alt="Instagram" className="h-6 xl:h-7 w-auto" />
            </a>
            <a href="https://www.youtube.com/channel/UCu52zXBWGDIrBaZgUuaAgHg">
              <Image
                src={yt}
                alt="Youtube"
                className="h-5 xl:h-7 w-auto white"
              />
            </a>
          </div>
        </div>
        <div className="text-center flex flex-col sm:flex-row justify-center sm:w-1/3 order-1 sm:order-2 my-3 items-center sm:items-end">
          <Image
            src={logo}
            alt="logo"
            className="sm:w-[6vw] w-[22vw] mr-2 sm:mb-0 mb-2"
          />
          <div className={beviet.className}>
            <p className=" text-white sm:text-[1vw] text-[4vw] font-[1000]">
              Don&apos;t just dream it, Yoliday-it!
            </p>
          </div>
        </div>

        <div className="text-center sm:text-left flex flex-col justify-center items-center  sm:w-1/3 order-3 sm:order-3 my-3">
          <div>
            <h4 className="text-sm font-light">© 2024 All Rights Reserved</h4>
          </div>
        </div>
      </footer>
    </>
  )
}
