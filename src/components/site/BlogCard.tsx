import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/lib/data/types";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/media/$slug"
        params={{ slug: post.slug }}
        className="block overflow-hidden bg-secondary"
      >
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="img-zoom aspect-[16/11] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-3 text-[0.66rem] tracking-[0.16em] uppercase">
          <span className="text-gold">{post.category}</span>
          <span className="h-px w-4 bg-border" />
          <span className="text-muted-foreground">{formatDate(post.publishedAt)}</span>
        </div>
        <h3 className="mt-4 font-display text-xl leading-snug">
          <Link
            to="/media/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-gold"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-muted-foreground/70 uppercase">
          {post.readingTime}
        </p>
      </div>
    </article>
  );
}
