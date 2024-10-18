import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-20 flex w-fit flex-col items-center gap-3">
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-blue-600 underline underline-offset-2" href="/">
        Return to Yoliday Homepage
      </Link>
    </div>
  );
}
