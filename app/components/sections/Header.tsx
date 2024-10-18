import yolidayLogoWhite from "../../assets/icons/yoliday-white-logo.png";
function Header() {
  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-black bg-opacity-30 px-10 py-2 lg:px-24">
      <div className="flex-grow">
        <img src={yolidayLogoWhite.src} alt="Yoliday" className="h-9"></img>{" "}
      </div>

      <div className="flex items-center justify-center gap-8 text-white">
        <div>
          <a className="underline underline-offset-2" href="#hero">
            Home
          </a>{" "}
        </div>
        <div>
          <a className="underline underline-offset-2" href="#intro-video">
            About
          </a>{" "}
        </div>
      </div>
    </header>
  );
}

export default Header;
