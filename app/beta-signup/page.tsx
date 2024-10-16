"use client";

import { signupForBeta } from "../actions/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result: { success: boolean; message: string } =
      await signupForBeta(formData);

    if (result.success) {
      router.push("/beta-signup/success");
    } else {
      setError(result.message);
    }
    setLoading(false);
  }
  return (
    <div className="mt-5 overflow-hidden bg-white text-black lg:mt-10">
      <h1 className="mb-5 text-center font-poppins text-2xl font-medium text-black text-opacity-80 md:text-3xl lg:mb-10">
        Enter your play store email ID
      </h1>
      <form
        action={handleSubmit}
        className="flex min-w-full flex-col items-center gap-4"
      >
        <div className="flex min-w-96 flex-col">
          <label
            className="text-sm text-black text-opacity-70"
            htmlFor="emailid"
          >
            Email ID
          </label>
          <input
            className="mb-2 mt-1 rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            name="emailid"
            placeholder="Ex: qwerty123@mail.com"
            type="email"
          />
          <p className="text-[10px] text-black">
            Use your Google Play Store email ID
          </p>
          <p className="text-[10px] text-red-500">{error}</p>
          {/* <VerificationCode /> */}
          <button
            className="mt-5 rounded-sm bg-gradient-linear py-1 font-semibold text-white"
            type="submit"
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
      {/* <hr/>
        <div>or</div>
        <div>
            <button>Continue with google</button>
            <button>Continue with Apple</button>
        </div> */}
    </div>
  );
}

export default page;
