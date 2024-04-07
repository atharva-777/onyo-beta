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
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BN7FLE3G21"></Script>
     <Script> {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BN7FLE3G21'); `}</Script>
      <Navbar onButtonClick={handleScrollToAdventure} />
      <IntroSection />
      <Features onButtonClick={handleScrollToAdventure} />
      <Adventure ref={adventureRef} />
      <Popular onButtonClick={handleScrollToAdventure} />
      <Footer />
    </>
  );
}
