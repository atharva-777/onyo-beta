import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success",
  description: "Your email is verified",
};
function page() {
  return (
    <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center px-5 text-center lg:mt-20">
      <h1 className="mb-5 flex text-2xl font-semibold text-black text-opacity-80">
        <div className="flex size-8 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white">
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

export default page;
