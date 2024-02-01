import { SubmitForm } from "@/utils/SubmitForm";

export default function Page({ searchParams }) {
  const { sent = "unsent", email = "", name = "", message = "" } = searchParams;

  return (
    <div className="mt-16 flex flex-col gap-5 justify-center text-center text-2xl font-bold font-serif">
      <h1 className="text-5xl font-thin">Contact Me!</h1>
      <form
        action={SubmitForm}
        className="flex flex-col gap-5 shadow-lg p-4 w-11/12 sm:w-9/12 lg:w-1/2 mx-auto bg-slate-400 rounded"
      >
        <div className="flex flex-col text-left">
          <label htmlFor="email">Email</label>
          <input
            className="formInput"
            defaultValue={email}
            type="email"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="name">Name</label>
          <input
            className="formInput"
            defaultValue={name}
            type="text"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="query">Message</label>
          <textarea
            defaultValue={message}
            rows={5}
            name="message"
            minLength={5}
            required
          />
        </div>
        {sent === "failed" && (
          <p className="text-red-900">
            Something went wrong sending that. Please try again
          </p>
        )}
        {sent === "success" && (
          <p className="text-green-900">
            Message sent successfully! I will be in contact soon :)
          </p>
        )}
        <button className="projectLink" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
