"use client";

import { useActionState } from "react";
import { SubmitForm } from "@/utils/SubmitForm";

const initialState = {
  subject: "",
  email: "",
  message: "",
};

function SubmitButton({ pending }) {
  if (!pending)
    return (
      <button
        className="w-full font-medium sm:w-3/4 lg:w-1/3 mx-auto border-neutral-700 border-2 text-neutral-700 py-2 focus:rounded-3xl focus:border-neutral-900 hover:cursor-pointer rounded-none hover:rounded-3xl transition-all delay-75 ease-in-out"
        type="submit"
        aria-disabled={pending}
      >
        Send Message
      </button>
    );

  if (pending)
    return (
      <span className="flex gap-5 items-center justify-center">
        Sending message{" "}
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </span>
    );
}

function FormItem({ children }) {
  return <div className="flex flex-col text-left">{children}</div>;
}

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    SubmitForm,
    initialState
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 w-full p-8 sm:w-3/4 lg:w-1/2 mx-auto text-[1.2rem] bg-white"
    >
      <h1 className="text-left text-4xl text-blue-400">Get In touch</h1>
      <FormItem>
        <label className="inputLabel" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="name@email.com"
          className="formInput"
          type="email"
          required
        />
      </FormItem>
      <FormItem>
        <label className="inputLabel" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          placeholder="What are we talking about today"
          className="formInput"
          type="text"
          required
        />
      </FormItem>
      <FormItem>
        <label className="inputLabel" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
          className="formInput"
          rows={3}
          minLength={1}
          required
        />

        <input
          type="text"
          id="title"
          name="title"
          className="h-0"
          tabIndex="-1"
          autoComplete="off"
        />
      </FormItem>

      {!state?.message && <SubmitButton pending={isPending} />}
      {state?.message && state.message}
    </form>
  );
}
