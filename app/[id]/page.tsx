import Link from "next/link";
import { notFound } from "next/navigation";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getPost } from "@/lib/api";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

// This route waits for its server fetch instead of streaming a placeholder.
export const instant = false;

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-black px-4 pb-20 pt-32 text-white sm:px-6">
      <Navbar />
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-neutral-400 transition hover:text-white"
        >
          ← Back to home
        </Link>
        <h1
          className={`${instrumentSerif.className} mt-8 text-[clamp(2.5rem,7vw,4.5rem)] leading-tight capitalize`}
        >
          {post.title}
        </h1>
        <p className="mt-8 whitespace-pre-wrap text-base leading-8 text-neutral-300 sm:text-lg">
          {post.body}
        </p>
      </article>
    </main>
  );
}
