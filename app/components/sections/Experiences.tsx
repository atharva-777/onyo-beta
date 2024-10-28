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
    title: "Sundown Sail",
    price: 750,
    duration: "1 hour",
    location: "Cochin",
    image: "/images/sunset-image.jpg",
  },
  {
    title: "Sandy Trails Expedition",
    price: 1100,
    duration: "1 hour",
    location: "Jaisalmer",
    image: "/images/desert-image.jpg",
  },
  {
    title: "Hot Air Balloon Escape",
    price: "10,500",
    duration: "1 hour",
    location: "Jaipur",
    image: "/images/balloon.jpg",
  },
  {
    title: "Soul Stirring Paragliding",
    price: 3500,
    duration: "1.5 hours",
    location: "Bir Billing",
    image: "/images/paragliding.jpg",
  },
  {
    title: "A Day in the Vineyard",
    price: 3550,
    duration: "1 day",
    location: "Nashik",
    image: "/images/wine.jpg",
  },
  {
    title: "Backwater Bliss",
    price: "13,400",
    duration: "1 day",
    location: "Alleppey",
    image: "/images/houseboat.jpg",
  },
  {
    title: "River Roar Expedition",
    price: 890,
    duration: "1 hour",
    location: "Rishikesh",
    image: "/images/river.jpg",
  },
];

const trips2: CardProps[] = [
  {
    title: "Yoga on the Beach",
    price: 1260,
    duration: "1 hour",
    location: "South Goa",
    image: "/images/beach-yoga.png",
  },
  {
    title: "Pilgrimage Trails",
    price: 450,
    duration: "5 hours",
    location: "Mumbai",
    image: "/images/pilgrimage.jpg",
  },
  {
    title: "Heritage Odyssey",
    price: 300,
    duration: "2 hours",
    location: "Mumbai",
    image: "/images/heritage.jpg",
  },
  {
    title: "Coffee Estate Tour",
    price: 1550,
    duration: "1.5 hours",
    location: "Coorg",
    image: "/images/coffee.jpg",
  },
  {
    title: "Culinary Carnival",
    price: 580,
    duration: "2 hours",
    location: "Mumbai",
    image: "/images/food.jpg",
  },
  {
    title: "Deep Sea Fishing in Coco Beach",
    price: 2200,
    duration: "3 hours",
    location: "Goa",
    image: "/images/deep-sea.jpg",
  },
  {
    title: "A Spiritual Stroll",
    price: 5500,
    duration: "1 day",
    location: "Varanasi",
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
