"use server";

import pool from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function SubmitForm(prevState: any, formData: FormData) {
  const data = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  try {
    await pool.query(
      "INSERT INTO messages(name, email, message) VALUES($1, $2, $3)",
      [data.name, data.email, data.message]
    );

    revalidatePath("/contact");
    return { message: "Message sent successfully" };
  } catch (error) {
    return { message: "Failed to send message. Refresh and try again." };
  }
}
