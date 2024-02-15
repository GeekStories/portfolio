import pool from "@/db";
import GetPost from "@/utils/GetPost";
import { redirect } from "next/navigation";

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
    return { __html: post.content };
  }

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="italic text-lg">Posted: {post.createdat.toDateString()}</p>
      <div
        className="border-2 border-gray-300 p-4 rounded"
        dangerouslySetInnerHTML={getMarkup()}
      ></div>
      <div>tags: {post.tags}</div>
    </div>
  );
}
