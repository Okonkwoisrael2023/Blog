import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { getPosts } from "@/lib/api";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});
const PAGE_SIZE = 10;

export default async function BlogSection({ page }: { page: number }) {
  const posts = await getPosts(page, PAGE_SIZE);

  return (
    <section className="mx-3 mt-12 rounded-3xl bg-[#1a1a1a] px-4 py-10 sm:mx-6 sm:mt-16 sm:rounded-[40px] sm:px-6 sm:py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${post.id}`}
            className="rounded-3xl bg-[#222] p-4 transition hover:bg-[#2a2a2a]"
          >
            <div className="px-3 pb-4 pt-6">
              <h3 className={`${instrumentSerif.className} text-3xl leading-tight text-white`}>
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <nav aria-label="Pagination" className="mt-8 flex justify-center gap-6 text-white">
        {page > 1 ? <Link href={`/?page=${page - 1}`}>Previous</Link> : <span>Previous</span>}
        <span>Page {page}</span>
        {posts.length === PAGE_SIZE ? (
          <Link href={`/?page=${page + 1}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </nav>
    </section>
  );
}
