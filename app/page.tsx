"use client";
import { useRef } from "react";
import Popular from "@/components/Home/Popular";
import Adventure from "../components/Home/Adventure";
import Features from "../components/Home/Features";
import IntroSection from "../components/Home/IntroSection";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar/navbar";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

  export default function Home() {
  const adventureRef = useRef<HTMLIFrameElement>(null);

  const handleScrollToAdventure = () => {
    if (adventureRef.current) {
      console.log("handleScrollToAdventure called");
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
      <GoogleAnalytics gaId="G-BN7FLE3G21" />
    </>
  );
}
