import React from "react";
import placeholderImage from "../assets/images/places-image.jpg";
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
    <div className="flex min-h-fit w-48 flex-col rounded-2xl bg-[#f7f7f7] shadow-xl">
      <img
        className="h-48 w-full rounded-t-2xl object-cover"
        src={image}
        alt=""
      />
      <p className="flex-grow px-3 py-2 font-semibold leading-none">{title}</p>
      <p className="flex items-center justify-center gap-1 pb-2 pt-1 text-sm">
        <span>₹{price}</span>
        <DotIcon />
        <span>{days} days</span>
        <DotIcon />
        <span>{location}</span>
      </p>
    </div>
  );
}

export default Card;
