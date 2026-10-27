import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import { Instrument_Serif } from "next/font/google";
import BlogSection from "@/components/BlogSection";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col bg-black pt-32">
     <Navbar />

     
      <h1
        className={`${instrumentSerif.className} text-center text-6xl leading-[0.95] tracking-tight text-white md:text-8xl pt-23`}
      >
        Simple thoughts on tech  <br /> and daily life
      </h1>

      <BlogSection />
     
    </div>
  );
}
