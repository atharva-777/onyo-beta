"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto mt-20 flex w-fit flex-col items-center gap-5">
      <h2>An error occurred while loading this page!</h2>
      <button
        className="rounded-md bg-black p-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
