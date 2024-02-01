import pool from "@/db";
import { redirect } from "next/navigation";

export async function SubmitForm(formData: FormData) {
  "use server";

  const parsedData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const name = parsedData.name.toString();
  const email = parsedData.email.toString();
  const message = parsedData.message.toString();

  try {
    await pool.query(
      "INSERT INTO messages(name, email, message) VALUES($1, $2, $3)",
      [name, email, message]
    );
  } catch (error) {
    console.log(error);
    return redirect(
      `/contact?sent=failed&email=${email}&name=${name}&message=${message}`
    );
  } finally {
    return redirect("/contact?sent=success");
  }
}
