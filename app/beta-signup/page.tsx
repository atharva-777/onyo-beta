"use client";

import Link from "next/link";
import { signupForBeta } from "../actions/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 lg:p-10">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <Link href="/">
          <div className="mb-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7505 7.36646H4.58049L10.1705 1.77646L8.75049 0.366455L0.750488 8.36646L8.75049 16.3665L10.1605 14.9565L4.58049 9.36646H16.7505V7.36646Z"
                fill="#707070"
              />
            </svg>
          </div>
        </Link>

        <h1 className="mb-5 text-left font-poppins text-xl font-medium text-black text-opacity-80 md:text-3xl lg:mb-10">
          Please Enter Your Email ID
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm text-black text-opacity-70"
              htmlFor="emailid"
            >
              Email ID
            </label>
            <input
              id="emailid"
              name="emailid"
              type="email"
              placeholder="Ex: qwerty123@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {/* <p className="mt-1 text-xs text-black">
              Use your email ID
            </p> */}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>

          <button
            className={`mt-5 rounded-sm bg-gradient-linear py-2 font-semibold text-white transition duration-200 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
