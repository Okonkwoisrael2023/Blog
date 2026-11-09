import Navbar from "@/components/Navbar";
import { Instrument_Serif } from "next/font/google";
import BlogSection from "@/components/BlogSection";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const instant = false;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const value = (await searchParams).page;
  const requestedPage = typeof value === "string" ? Number(value) : 1;
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  return (
    <div className="container flex min-h-screen w-full max-w-full flex-col bg-black pt-32">
     <Navbar />

     
      <h1
        className={`${instrumentSerif.className} px-4 pt-8 text-center text-[clamp(2.75rem,9vw,6rem)] leading-[0.95] tracking-tight text-white`}
      >
        Simple thoughts on tech <br className="hidden sm:block" /> and daily life
      </h1>

      <BlogSection page={page} />
     
    </div>
  );
}
