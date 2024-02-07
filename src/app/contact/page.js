import { SubmitForm } from "@/utils/SubmitForm";

export default function Page({ searchParams }) {
  const { sent = "unsent", email = "", name = "", message = "" } = searchParams;

  return (
    <div className="mt-16 flex flex-col gap-5 justify-center text-center text-2xl font-bold font-serif">
      <form
        action={SubmitForm}
        className="flex flex-col gap-5 w-full p-2 sm:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="flex flex-col text-left">
          <label className="inputLabel" htmlFor="email">
            Email
          </label>
          <input
            className="formInput"
            defaultValue={email}
            type="email"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="inputLabel" htmlFor="name">
            Name
          </label>
          <input
            className="formInput"
            defaultValue={name}
            type="text"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="inputLabel" htmlFor="query">
            Message
          </label>
          <textarea
            className="font-medium p-2 rounded border-none focus:outline focus:outline-2 focus:outline-blue-500 focus:ring-0"
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
        <button
          className="w-full font-medium sm:w-3/4 lg:w-1/2 mx-auto border-blue-400 border-2 text-blue-900 rounded py-2 hover:cursor-pointer"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
