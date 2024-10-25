"use client";

import YolidayLogoBlue from "../../assets/icons/yoliday logo.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center px-5 text-center lg:mt-20">
      <div className="mb-5 md:mb-8">
        <img
          src={YolidayLogoBlue.src}
          alt="Yoliday Logo"
          width={100}
          height={100}
        />
      </div>
      <h1 className="mb-5 flex text-2xl font-semibold text-black text-opacity-80">
        <div className="mr-3 flex size-8 items-center justify-center rounded-full bg-green-500 pt-1 text-2xl font-bold text-white">
          &#10003;
        </div>{" "}
        Your email is verified
      </h1>
      <p className="mb-4 text-sm">
        Welcome to Yoliday Beta Testing. You&apos;re all set to join our early
        access. Your Adventure Starts Here!
      </p>
      <p className="mb-4 text-sm">
        We have sent you an email to download the app
      </p>
    </div>
  );
}

export default Page;
