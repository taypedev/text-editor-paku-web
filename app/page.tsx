import { formatDate, getBlogPosts } from "@/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const PoppinsFont = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  const allBlogs = getBlogPosts();

  return (
    <main className="min-h-screen">
      <section className="m-5 p-3 border rounded-sm space-y-4">
        <h3 className={`text-orange-400 text-3xl ${PoppinsFont.style}`}>
          Selecciona un blog de PAKU
        </h3>

        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blogs/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.date, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}
