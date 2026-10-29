import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const posts = [
  {
    slug: "designing-for-user-delight",
    title: "Designing for user delight",
    category: "projects",
    readTime: "5 min",
    image: "bg-gradient-to-br from-pink-200 via-orange-100 to-orange-300",
  },
  {
    slug: "the-evolution-of-design-thinking",
    title: "The evolution of design thinking: insights and perspectives",
    category: "projects",
    readTime: "4 min",
    image: "bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-700",
  },
  {
    slug: "mastering-the-art-of-design-tools",
    title: "Mastering the art of design tools: a guide for product designers",
    category: "design",
    readTime: "3 min",
    image: "bg-gradient-to-br from-orange-200 via-orange-300 to-amber-200",
  },
];

export default function BlogSection() {
  return (
    <section className="mx-6 mt-16 rounded-[40px] bg-[#1a1a1a] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl bg-[#222] p-4 transition hover:bg-[#2a2a2a]"
          >
            <div className={`aspect-5/3 w-full rounded-xl ${post.image}`} />

            <div className="px-3 pb-4 pt-6">
              <h3
                className={`${instrumentSerif.className} text-3xl leading-tight text-white`}
              >
                {post.title}
              </h3>

              <p className="mt-4 text-sm text-neutral-500">
                {post.category} · {post.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}