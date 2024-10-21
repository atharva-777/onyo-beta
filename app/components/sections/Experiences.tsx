import React from "react";
import Card from "../Card";
import type { CardProps } from "../Card";

const trips: CardProps[] = [
  {
    title: "Sunset Cruise in Kerala",
    price: 5000,
    days: 3,
    location: "Kerala",
    image: "/images/sunset-image.jpg",
  },
  {
    title: "Desert Safari in Rajasthan",
    price: 5000,
    days: 3,
    location: "Rajasthan",
    image: "/images/desert-image.jpg",
  },
  {
    title: "Hot Air Balloon Ride in Jaipur",
    price: 5000,
    days: 3,
    location: "Jaipur",
    image: "/images/balloon.jpg",
  },
  {
    title: "Paragliding in Manali",
    price: 5000,
    days: 3,
    location: "Manali",
    image: "/images/paragliding.jpg",
  },
  {
    title: "Wine tasting in Nashik",
    price: 5000,
    days: 3,
    location: "Nashik",
    image: "/images/wine.jpg",
  },
  {
    title: "Houseboat Stay in Alleppey",
    price: 5000,
    days: 3,
    location: "Alleppey",
    image: "/images/houseboat.jpg",
  },
  {
    title: "River Rafting in Rishikesh",
    price: 5000,
    days: 3,
    location: "Rishikesh",
    image: "/images/river.jpg",
  },
];

const trips2: CardProps[] = [
  {
    title: "Beach Yoga in South Goa",
    price: 5000,
    days: 3,
    location: "Goa",
    image: "/images/beach-yoga.jpg",
  },
  {
    title: "Traditional Bengali Cooking",
    price: 5000,
    days: 3,
    location: "Bengal",
    image: "/images/bengali-cooking.jpg",
  },
  {
    title: "Guided Village Walk",
    price: 5000,
    days: 3,
    location: "Assam",
    image: "/images/guided-village.jpg",
  },
  {
    title: "Spice Plantation Tour",
    price: 5000,
    days: 3,
    location: "Goa",
    image: "/images/spice-plant.jpg",
  },
  {
    title: "Weaving Workshop",
    price: 5000,
    days: 3,
    location: "Kashmir",
    image: "/images/weaving.jpg",
  },
  {
    title: "Fishing with Local Fisherman",
    price: 5000,
    days: 3,
    location: "Kerala",
    image: "/images/fishing.jpg",
  },
  {
    title: "Cultural Tour of Varanasi",
    price: 5000,
    days: 3,
    location: "Varanasi",
    image: "/images/culture-varanasi.jpg",
  },
];
function Experiences() {
  return (
    <section className="mx-5 mt-20 flex flex-col gap-5 md:gap-10">
      <div className="scrollbar-hidden grid grid-flow-col gap-8 overflow-x-auto py-8">
        {trips.map((trip, i) => {
          return <Card {...trip} key={i} />;
        })}
      </div>
      <div className="scrollbar-hidden grid grid-flow-col gap-8 overflow-x-auto py-8">
        {trips2.map((trip, i) => {
          return <Card {...trip} key={i} />;
        })}
      </div>
    </section>
  );
}

export default Experiences;
