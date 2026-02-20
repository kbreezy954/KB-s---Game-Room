"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession } from "@/lib/auth";

type AuthFormProps = {
  mode: "login" | "register";
};

export const AuthForm = ({ mode }: AuthFormProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLabel = mode === "login" ? "Login" : "Create Account";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = email.split("@")[0] || "Player";
    saveSession({ email, username });
    router.push("/dashboard");
  };

  return (
    <form className="glass-panel mx-auto w-full max-w-md rounded-3xl p-8" onSubmit={onSubmit}>
      <h1 className="mb-6 text-center text-3xl font-bold neon-text">{submitLabel}</h1>
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-neonCyan focus:shadow-neon"
            placeholder="you@gameroom.gg"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Password</span>
          <input
            required
            minLength={6}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-neonMagenta focus:shadow-neon"
            placeholder="••••••••"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-neonCyan/80 to-neonMagenta/80 px-4 py-3 font-semibold text-black transition hover:shadow-neon"
      >
        {submitLabel}
      </button>
    </form>
  );
};
