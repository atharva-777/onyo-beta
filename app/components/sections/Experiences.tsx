"use client";
import React from "react";
import Card from "../Card";
import type { CardProps } from "../Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const trips: CardProps[] = [
  {
    title: "Sunset Cruise in Kerala",
    price: 8000,
    days: 2,
    location: "Kerala",
    image: "/images/sunset-image.jpg",
  },
  {
    title: "Desert Safari in Rajasthan",
    price: 6000,
    days: 1,
    location: "Jaisalmer",
    image: "/images/desert-image.jpg",
  },
  {
    title: "Hot Air Balloon Ride in Jaipur",
    price: 4000,
    days: 1,
    location: "Jaipur",
    image: "/images/balloon.jpg",
  },
  {
    title: "Paragliding",
    price: 6000,
    days: 2,
    location: "Bir",
    image: "/images/paragliding.jpg",
  },
  {
    title: "Wine tasting in Nashik",
    price: 4000,
    days: 1,
    location: "Nashik",
    image: "/images/wine.jpg",
  },
  {
    title: "Houseboat Stay in Alleppey",
    price: 10000,
    days: 2,
    location: "Alleppey",
    image: "/images/houseboat.jpg",
  },
  {
    title: "River Rafting in Rishikesh",
    price: 1000,
    days: 1,
    location: "Rishikesh",
    image: "/images/river.jpg",
  },
];

const trips2: CardProps[] = [
  {
    title: "Beach Yoga in South Goa",
    price: 3000,
    days: 1,
    location: "Goa",
    image: "/images/beach-yoga.jpg",
  },
  {
    title: "Bengali Cooking Class",
    price: 2500,
    days: 1,
    location: "Delhi",
    image: "/images/bengali-cooking.jpg",
  },
  {
    title: "Guided Village Walk",
    price: 4000,
    days: 2,
    location: "Rajasthan",
    image: "/images/guided-village.jpg",
  },
  {
    title: "Spice Plantation Tour",
    price: 2000,
    days: 1,
    location: "Coorg",
    image: "/images/spice-plant.jpg",
  },
  {
    title: "Weaving Workshop",
    price: 5000,
    days: 1,
    location: "Ladakh",
    image: "/images/weaving.jpg",
  },
  {
    title: "Fishing with Local Fisherman",
    price: 3000,
    days: 1,
    location: "Goa",
    image: "/images/fishing.jpg",
  },
  {
    title: "Cultural Tour of Varanasi",
    price: 8000,
    days: 3,
    location: "Varanasi",
    image: "/images/culture-varanasi.jpg",
  },
];
function Experiences() {
  return (
    <section className="mx-10 mt-20 flex flex-col gap-5 px-4 md:gap-10 lg:mx-16">
      <Carousel className="" opts={{ align: "start" }}>
        <CarouselContent className="-ml-1 py-6">
          {trips.map((trip, i) => (
            <CarouselItem
              key={i}
              className="px-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <Card {...trip} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel className="" opts={{ align: "start" }}>
        <CarouselContent className="-ml-1 py-6">
          {trips2.map((trip, i) => (
            <CarouselItem
              key={i}
              className="px-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <Card {...trip} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Experiences;
