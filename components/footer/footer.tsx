import logo from "../../public/images/logo.png"
import Image from "next/image"
import em from "../../public/images/em.png"
import ig from "../../public/images/ig.png"
import lin from "../../public/images/in.png"
import fb from "../../public/images/fb.png"
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
        <div className="footer-section flex flex-col justify-center items-center sm:w-1/3 order-2 sm:order-1 my-3">
          <div className="flex space-x-8 my-3">
            <a href="https://twitter.com/43Meher/">
              <Image src={fb} alt="Facebook" className="h-7 w-auto" />
            </a>
            <a href="https://www.instagram.com/_atharva.meher_/">
              <Image src={em} alt="Email" className="h-7 w-auto" />
            </a>
            <a href="https://www.linkedin.com/in/atharva-meher-8574131a0/">
              <Image src={lin} alt="LinkedIn" className="h-7 w-auto" />
            </a>
            <a href="https://www.instagram.com/_atharva.meher_/?hl=en">
              <Image src={ig} alt="Instagram" className="h-7 w-auto" />
            </a>
          </div>
        </div>
        <div className="text-center flex flex-row justify-center sm:w-1/3 order-1 sm:order-2 my-3 items-end">
          <Image src={logo} alt="logo" className="sm:w-[6vw] w-[12vw] mr-2" />
          <div className={beviet.className}>
            <p className=" text-white sm:text-[1vw] text-[2vw] font-[1000]">
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
