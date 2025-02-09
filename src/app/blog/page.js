import pool from "@/db";
import Link from "next/link";

export default async function Page() {
  let posts = [];
  try {
    const { rows } = await pool.query(
      "SELECT * FROM posts ORDER BY created LIMIT 10"
    );

    posts = rows;
  } catch {
    console.log("Failed to fetch blog posts.");
  }

  return (
    <div className="w-full text-center pt-16">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-/12 xl:w-1/3 mx-auto rounded">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="text-xl text-left hover:cursor-pointer flex flex-col group"
          >
            <span className="text-sm sm:text-lg">{post.title}</span>
            <hr className="h-1 mr-auto bg-gray-400 w-1/3 group-hover:w-full group-hover:bg-gray-500 transition-all delay-75 ease-in-out rounded" />
            <span className="text-sm text-right">
              {post.created.toDateString()}
            </span>
          </Link>
        ))}

        {posts.length == 0 && <div className="font-medium text-xl">Couldn't get blog posts!</div>}
      </div>
    </div>
  );
}
