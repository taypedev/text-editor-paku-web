import { baseUrl } from "@/app/sitemap";
import { formatDate, getBlogPosts } from "@/utils";
import { notFound } from "next/navigation";
import { CustomMD } from "../_components/md";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const image =
    "https://t3076278.p.clickup-attachments.com/t3076278/795a74e9-0d06-4c6d-8397-4c55515549c9/26764326_2112.i301.030.S.m004.c13.UI%20and%20UX%20designers%20concepts%20isometric%20composition.jpg";

  let { title, date: publishedTime, description } = post.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen  max-w-[760px] p-24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.metadata.author,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
        </p>
      </div>
      <article className="prose">
        <CustomMD source={post.content} />
      </article>
    </main>
  );
}
