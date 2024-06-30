"use server";

import pool from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  secondaryEmail: z.string().optional(),
});

export async function SubmitForm(prevState: any, formData: FormData) {
  const data = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    secondaryEmail: formData.get("secondaryEmail"),
  });

  try {
    await pool.query(
      "INSERT INTO messages(name, email, message, secondaryemail) VALUES($1, $2, $3, $4)",
      [data.name, data.email, data.message, data.secondaryEmail]
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
