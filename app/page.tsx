"use client";
import { useRef } from "react";
import Popular from "@/components/Home/Popular";
import Adventure from "../components/Home/Adventure";
import Features from "../components/Home/Features";
import IntroSection from "../components/Home/IntroSection";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  const adventureRef = useRef<HTMLIFrameElement>(null);

  const handleScrollToAdventure = () => {
    if (adventureRef.current) {
      adventureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onButtonClick={handleScrollToAdventure} />
      <IntroSection />
      <Features onButtonClick={handleScrollToAdventure} />
      <Adventure ref={adventureRef} />
      <Popular onButtonClick={handleScrollToAdventure} />
      <Footer />
    </>
  );
}
