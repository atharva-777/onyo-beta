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

const trips: CardProps[] = [
  {
    title: "Sunset Cruise in Cochin",
    price: 2000,
    duration: "5 hours",
    location: "Kerala",
    image: "/images/sunset-image.jpg",
  },
  {
    title: "Desert Safari in Jaisalmer",
    price: 4000,
    duration: "3 hours",
    location: "Rajasthan",
    image: "/images/desert-image.jpg",
  },
  {
    title: "Hot Air Balloon Ride in Jaipur",
    price: 8000,
    duration: "2 hours",
    location: "Rajasthan",
    image: "/images/balloon.jpg",
  },
  {
    title: "Paragliding in Bir",
    price: 3000,
    duration: "2 hours",
    location: "Himachal",
    image: "/images/paragliding.jpg",
  },
  {
    title: "Wine tasting in Nashik",
    price: 3000,
    duration: "2 hours",
    location: "Maharashtra",
    image: "/images/wine.jpg",
  },
  {
    title: "Houseboat Stay in Alleppey",
    price: 7000,
    duration: "1 day",
    location: "Kerala",
    image: "/images/houseboat.jpg",
  },
  {
    title: "River Rafting in Rishikesh",
    price: 1500,
    duration: "3 hours",
    location: "Uttarakhand",
    image: "/images/river.jpg",
  },
];

const trips2: CardProps[] = [
  {
    title: "Beach Yoga in Palolem",
    price: 800,
    duration: "1 hour",
    location: "Goa",
    image: "/images/beach-yoga.png",
  },
  {
    title: "Bengali Cooking Class in Kolkata",
    price: 1000,
    duration: "2 hours",
    location: "West Bengal",
    image: "/images/bengali-cooking.png",
  },
  {
    title: "Guided Village Walk Devamali",
    price: 4000,
    duration: "3 hours",
    location: "Rajasthan",
    image: "/images/guided-village.jpg",
  },
  {
    title: "Spice Plantation Tour in Coorg",
    price: 2000,
    duration: "1 hour",
    location: "Karnataka",
    image: "/images/spice-plant.jpg",
  },
  {
    title: "Weaving Workshop in Ladakh",
    price: 3000,
    duration: "2 hours",
    location: "Ladakh",
    image: "/images/weaving.jpg",
  },
  {
    title: "Fishing with Local Fisherman",
    price: 2000,
    duration: "2 hours",
    location: "Goa",
    image: "/images/fishing.png",
  },
  {
    title: "Cultural Tour of Varanasi",
    price: 3000,
    duration: "4 hours",
    location: "Uttar Pradesh",
    image: "/images/culture-varanasi.jpg",
  },
];
function Experiences() {
  return (
    <section className="mx-10 mt-20 flex flex-col gap-5 md:mx-10 md:gap-10 lg:mx-16">
      <Carousel className="" opts={{ align: "start" }}>
        <CarouselContent className="-mx-1 py-6">
          {trips.map((trip, i) => (
            <CarouselItem
              key={i}
              className="px-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <Card {...trip} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel className="" opts={{ align: "start" }}>
        <CarouselContent className="-mx-1 py-6">
          {trips2.map((trip, i) => (
            <CarouselItem
              key={i}
              className="px-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
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
