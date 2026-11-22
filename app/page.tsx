import { getLatestPosts } from "@/lib/blog";
import Writing from "./_components/Writing";

export default function BlogIndex() {
  const posts = getLatestPosts();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="py-10">
        <Writing posts={posts} />
      </main>
    </div>
  );
}
