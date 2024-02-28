import logo from "../../public/images/logo.png";
import Image from "next/image";
import em from "../../public/images/em.png";
import ig from "../../public/images/ig.png";
import lin from "../../public/images/in.png";
import fb from "../../public/images/fb.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#373737] text-white sm:px-[2vh] sm:py-[vh] flex flex-col sm:flex-row">
        <div className="footer-section flex flex-col justify-center items-center sm:w-1/3 order-2 sm:order-1 my-3">
          <div className="flex space-x-4 my-3">
            <a href="https://twitter.com/43Meher/">
              <Image src={fb} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/atharva-meher-8574131a0/">
              <Image src={lin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/_atharva.meher_/?hl=en">
              <Image src={ig} alt="Instagram" />
            </a>
            <a href="https://www.instagram.com/_atharva.meher_/">
              <Image src={em} alt="Email" />
            </a>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center sm:w-1/3 order-1 sm:order-2 my-3">
          <Image src={logo} alt="logo" className="mx-auto" />

          <p className=" text-white mt-1">
            Don&apos;t just dream it, Yoliday-it!
          </p>
        </div>

        <div className="text-center sm:text-left flex flex-col justify-center items-center  sm:w-1/3 order-3 sm:order-3 my-3">
          <div>
            <h4 className="text-l  mb-3">Contact Us</h4>
            <h4 className="text-l  mb-3 ">contact@yoliday.com</h4>
          </div>
        </div>
      </footer>
    </>
  );
}
