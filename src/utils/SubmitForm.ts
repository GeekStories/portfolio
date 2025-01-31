"use server";

import pool from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  subject: z.string(),
  email: z.string().email(),
  message: z.string().min(1),
  title: z.string().optional(),
});

export async function SubmitForm(prevState: any, formData: FormData) {
  const data = schema.parse({
    subject: formData.get("subject"),
    email: formData.get("email"),
    message: formData.get("message"),
    title: formData.get("title"),
  });

  try {
    if(!data.title) {
      await pool.query(
        "INSERT INTO messages(subject, email, message) VALUES($1, $2, $3)",
        [data.subject, data.email, data.message]
      );
    }

    revalidatePath("/contact");
    return { message: "Message sent successfully" };
  } catch (error) {
    return {
      message: "Failed to send message. Refresh and try again.",
      error: error.message,
    };
  }
}
