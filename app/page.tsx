import Popular from "@/components/Home/Popular";
import Adventure from "../components/Home/Adventure";
import Features from "../components/Home/Features";
import IntroSection from "../components/Home/IntroSection";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <IntroSection />
      <Features />
      <Adventure />
      <Popular />
      <Footer />
    </>
  );
}
