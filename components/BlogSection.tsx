import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { getPost, Post } from "@/lib/api";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});
const posts = await getPost()

// const posts = [
//   {
//     id: 1,
//     title: "Designing for user delight",
//     category: "projects",
//     readTime: "1 min",
//     image: "bg-gradient-to-br from-pink-200 via-orange-100 to-orange-300",
//   },
//   {
//     id: 2,
//     title: "The evolution of design thinking: insights and perspectives",
//     category: "projects",
//     readTime: "2 min",
//     image: "bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-700",
//   },
//   {
//     id: 3,
//     title: "Mastering the art of design tools: a guide for product designers",
//     category: "design",
//     readTime: "2 min",
//     image: "bg-gradient-to-br from-orange-200 via-orange-300 to-amber-200",
//   },
// ];

export default function BlogSection() {
  if ( !posts) {
 return console.log("something went wrong")
}
  return (
    <section className="mx-3 mt-12 rounded-3xl bg-[#1a1a1a] px-4 py-10 sm:mx-6 sm:mt-16 sm:rounded-[40px] sm:px-6 sm:py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post ) => (
          <Link
            key={post.id}
            href={`/${post.id}`}
            className="rounded-3xl bg-[#222] p-4 transition hover:bg-[#2a2a2a]"
          >
            {/* <div className={`aspect-5/3 w-full rounded-xl ${post.image}`} /> */}

            <div className="px-3 pb-4 pt-6">
              <h3
                className={`${instrumentSerif.className} text-3xl leading-tight text-white`}
              >
                {post.title}
              </h3>

              {/* <p className="mt-4 text-sm text-neutral-500">
                {post.category} · {post.readTime}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}