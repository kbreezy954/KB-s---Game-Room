"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clearSession, getSession, SessionUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

const stats = [
  { label: "Total Games Played", value: "184" },
  { label: "High Score", value: "98,450" },
  { label: "Rank", value: "Diamond II" },
];

export const DashboardPanel = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.push("/login");
      return;
    }
    setUser(session);
  }, [router]);

  const logout = () => {
    clearSession();
    router.push("/login");
  };

  return (
    <section className="mx-auto w-[min(1000px,95%)]">
      <div className="glass-panel rounded-3xl p-8">
        <h1 className="mb-2 text-3xl font-bold neon-text">Welcome back, {user?.username ?? "Player"}</h1>
        <p className="mb-8 text-white/65">Your command center is ready. Track your progress and jump into battle.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold text-neonCyan">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/games" className="rounded-full border border-neonCyan/70 px-5 py-2 text-neonCyan hover:shadow-neon">
            View All Games
          </Link>
          <button
            onClick={logout}
            className="rounded-full border border-neonMagenta/60 px-5 py-2 text-neonMagenta hover:shadow-neon"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};
