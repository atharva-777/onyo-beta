import React from "react";
import { DotIcon } from "./Icons";

export type CardProps = {
  title: string;
  price: number;
  days: number;
  location: string;
  image: string;
};
function Card({ title, price, days, location, image }: CardProps) {
  return (
    <div className="flex h-72 min-w-52 flex-col rounded-2xl bg-[#f7f7f7] shadow-lg">
      <div className="h-48">
        <img
          className="h-48 w-full rounded-t-2xl object-cover"
          src={image}
          alt=""
        />
      </div>

      <div className="flex h-full flex-col justify-start">
        <p className="flex-grow px-3 py-2 text-start font-semibold leading-5">
          {title}
        </p>
        <p className="flex items-center justify-around gap-1 px-2 pb-2 pt-1 text-sm">
          <span>₹{price}</span>
          <DotIcon />
          <span>{days} days</span>
          <DotIcon />
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
