import pool from "@/db";

export default async function GetPost(id: number) {
  const { rows } = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
}
