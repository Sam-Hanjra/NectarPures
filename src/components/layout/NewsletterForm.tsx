"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("Thanks—you’re on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Try again shortly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-honey/90">
        Newsletter
      </p>
      <p className="mt-2 text-sm text-beige/75">
        Tips on routines, launches, and scalp-friendly habits—no spam.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="min-w-0 flex-1 rounded-xl border border-beige/20 bg-earth/40 px-4 py-2.5 text-sm text-beige placeholder:text-beige/45 focus:border-honey/60 focus:outline-none focus:ring-1 focus:ring-honey/40"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-xl bg-honey px-5 py-2.5 text-sm font-semibold text-earth transition hover:bg-[#ffc21a] disabled:opacity-60"
        >
          {status === "loading" ? "…" : "Join"}
        </button>
      </div>
      {message ? (
        <p
          className={`mt-2 text-xs ${status === "error" ? "text-red-200" : "text-beige/80"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
