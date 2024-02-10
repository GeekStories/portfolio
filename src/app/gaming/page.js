import pool from "@/db";
import Link from "next/link";

export default async function Page() {
  const { rows: posts } = await pool.query(
    "SELECT * FROM posts ORDER BY createdat LIMIT 10"
  );

  return (
    <div className="w-full text-center flex flex-col gap-5">
      <div>
        <h1 className="text-4xl">Posts</h1>
        <p className="text-xs">Mostly just game reviews</p>
      </div>

      <ol>
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="flex flex-col">
              <Link href={`/gaming/${post.id}`} className="text-lg">
                {post.title}
              </Link>
              <p className="text-xs">{post.createdat.toDateString()}</p>
            </li>
          ))}
      </ol>
    </div>
  );
}
