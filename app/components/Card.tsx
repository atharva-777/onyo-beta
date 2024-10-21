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
    <div className="flex h-72 min-w-52 flex-col rounded-2xl bg-[#f7f7f7] shadow-lg">
      <div className="h-48">
        <img
        className="h-48 w-full rounded-t-2xl object-cover"
        src={image}
        alt=""
      />
      </div>
      
      <div className="flex h-full flex-col justify-start">
        <p className=" px-3 flex-grow text-start  py-2 font-semibold leading-5">{title}</p>
        <p className="flex items-center px-2 justify-around gap-1 pb-2 pt-1 text-sm">
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
