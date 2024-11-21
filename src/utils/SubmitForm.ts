"use server";

import pool from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  subject: z.string(),
  email: z.string().email(),
  message: z.string().min(1),
  secondaryEmail: z.string().optional(),
});

export async function SubmitForm(prevState: any, formData: FormData) {
  const data = schema.parse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    secondaryEmail: formData.get("secondaryEmail"),
  });

  try {
    await pool.query(
      "INSERT INTO messages(subject, email, message, secondaryemail) VALUES($1, $2, $3, $4)",
      [data.subject, data.email, data.message, data.secondaryEmail]
    );

    revalidatePath("/contact");
    return { message: "Message sent successfully" };
  } catch (error) {
    return {
      message: "Failed to send message. Refresh and try again.",
      error: error.message,
    };
  }
}
