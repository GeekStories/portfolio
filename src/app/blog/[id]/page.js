import pool from "@/db";
import GetPost from "@/utils/GetPost";
import { redirect } from "next/navigation";
import "highlight.js/styles/vs.css";

export async function generateStaticParams() {
  const { rows: posts } = await pool.query("SELECT id FROM posts");
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await GetPost(id);
  return {
    title: post?.title,
    authors: {
      name: "Damon Pitkethley",
    },
    keywords: post?.tags,
  };
}

export default async function Page({ params }) {
  const { id } = params;
  const post = await GetPost(id);

  if (!post) {
    return redirect("/blog");
  }

  function getMarkup() {
    return {
      __html: post.content,
    };
  }

  return (
    <div className="flex flex-col w-full sm:w-2/3 lg:w-1/3 mx-auto gap-3">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="italic text-lg">Posted: {post.created.toDateString()}</p>
      <div
        className="border-2 border-gray-400 p-2 rounded"
        dangerouslySetInnerHTML={getMarkup()}
      ></div>
      <div>tags: {post.tags}</div>
    </div>
  );
}
