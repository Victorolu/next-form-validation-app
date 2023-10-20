"use client";
import Link from "next/link";
import { sendForm } from "@/modules/form";

type Result = {
  success: boolean;
  error: string[];
};

type MyProp = {
  setResult: (result: Result) => void;
};

export const UserForm = ({ setResult }: MyProp) => {
  return (
    <>
      <form
        action={async (e) => {
          setResult((await sendForm(e)) as unknown as Result);
        }}
        className="m-32 w-3/5 p-2 mx-auto"
      >
        <div className="grid">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium leading-6"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-3/5 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="grid mt-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            className="block w-3/5 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="grid mt-2">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium leading-6"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="block w-3/5 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="flex justify-end gap-4 mt-3">
          <button
            type="submit"
            className="border-solid border-2 border-slate-100 rounded-lg p-2 w-fit"
          >
            Submit
          </button>
          <Link
            href="/"
            className="border-solid border-2 border-slate-100 rounded-lg p-2 w-fit"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};
