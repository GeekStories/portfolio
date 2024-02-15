import pool from "@/db";
import Link from "next/link";

export default async function Page() {
  const { rows: posts } = await pool.query(
    "SELECT * FROM posts ORDER BY createdat LIMIT 10"
  );

  return (
    <div className="w-full text-center pt-16">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-/12 xl:w-1/3 mx-auto rounded">
        {posts &&
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="text-xl text-left hover:cursor-pointer flex flex-col group"
            >
              <span className="line-clamp-1 text-lg">{post.title}</span>
              <hr className="h-1 mr-auto bg-gray-400 w-1/3 group-hover:w-full group-hover:bg-gray-500 transition-all delay-75 ease-in-out rounded" />
              <span className="text-sm text-right">
                {post.createdat.toDateString()}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
