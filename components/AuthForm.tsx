"use client";

import Link from "next/link";
import { type FormEvent } from "react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const inputClass =
  "w-full rounded-2xl bg-[#222] px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:bg-[#2a2a2a] focus:ring-1 focus:ring-neutral-600";

type Props = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const isSignup = mode === "signup";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Better Auth will be connected here later
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0e0e0e] px-6 py-12 text-white">
      <Link href="/" className="mb-8 text-2xl font-medium tracking-tight">
        Bigger
      </Link>

      <div className="w-full max-w-md rounded-[40px] bg-[#1a1a1a] p-8 md:p-12">
        <h1
          className={`${instrumentSerif.className} text-center text-5xl leading-none`}
        >
          {isSignup ? "Create your account" : "Welcome back"}
        </h1>

        <p className="mt-4 text-center text-neutral-400">
          {isSignup
            ? "Sign up to read the full stories."
            : "Log in to keep reading."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className={inputClass}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className={inputClass}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={8}
            className={inputClass}
          />

          <button
            type="submit"
            className="mt-2 rounded-full bg-white py-4 font-medium text-black transition hover:bg-neutral-200"
          >
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-400">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <Link
            href={isSignup ? "/login" : "/signup"}
            className="text-white underline underline-offset-4"
          >
            {isSignup ? "Log in" : "Sign up"}
          </Link>
        </p>
      </div>
    </main>
  );
}