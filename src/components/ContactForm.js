"use client";

// @ts-expect-error
import { useFormStatus } from "react-dom";
// @ts-expect-error
import { useFormState } from "react-dom";
import { SubmitForm } from "@/utils/SubmitForm";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  if (!pending)
    return (
      <button
        className="w-full font-medium sm:w-3/4 lg:w-1/2 mx-auto border-blue-400 border-2 text-blue-900 rounded py-2 hover:cursor-pointer"
        type="submit"
        aria-disabled={pending}
      >
        Send Message
      </button>
    );

  if (pending)
    return (
      <p className="flex gap-5 items-center justify-center">
        Sending message{" "}
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </p>
    );
}

export default function Form() {
  const [state, formAction] = useFormState(SubmitForm, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 w-full p-2 sm:w-3/4 lg:w-1/2 mx-auto"
    >
      <div className="flex flex-col text-left">
        <label className="inputLabel" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          className="formInput"
          type="email"
          required
        />
      </div>

      <div className="flex flex-col text-left">
        <label className="inputLabel" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="formInput"
          type="text"
          required
        />
      </div>

      <div className="flex flex-col text-left">
        <label className="inputLabel" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="font-medium p-2 rounded border-none focus:outline focus:outline-2 focus:outline-blue-500 focus:ring-0"
          rows={5}
          minLength={1}
          required
        />
      </div>
      {!state?.message && <SubmitButton />}
      {state?.message && state.message}
    </form>
  );
}
