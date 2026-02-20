import Link from "next/link";
import { GameCard } from "@/components/game-card";
import { NeonControllerIcon } from "@/components/neon-controller-icon";
import { SiteNav } from "@/components/site-nav";
import { games } from "@/lib/game-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neon-gradient pb-12">
      <SiteNav />
      <section className="mx-auto grid w-[min(1100px,95%)] gap-10 rounded-3xl border border-white/10 bg-black/35 p-8 shadow-card md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-neonCyan/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neonCyan">
            Premium Gaming Hub
          </p>
          <h1 className="neon-text mb-4 text-5xl font-black leading-tight animate-pulseGlow">KB&apos;s Game Room</h1>
          <p className="mb-8 text-xl text-white/70">Play. Compete. Dominate.</p>
          <Link
            href="/register"
            className="inline-flex rounded-full bg-gradient-to-r from-neonCyan via-electricBlue to-neonMagenta px-7 py-3 font-semibold text-black transition hover:shadow-neon"
          >
            Start Playing
          </Link>
        </div>
        <div className="glass-panel neon-ring flex items-center justify-center rounded-3xl p-10">
          <NeonControllerIcon />
        </div>
      </section>

      <section className="mx-auto mt-14 w-[min(1100px,95%)]">
        <h2 className="mb-5 text-2xl font-semibold text-white">Featured Game Preview</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {games.slice(0, 8).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="glass-panel mx-auto mt-14 w-[min(1100px,95%)] rounded-2xl p-8 text-center">
        <p className="text-lg text-white/70">Future Ads Space Reserved</p>
      </section>

      <footer className="mx-auto mt-10 w-[min(1100px,95%)] border-t border-white/10 pt-6 text-sm text-white/50">
        Affiliate disclaimer placeholder: This site may include affiliate links in future updates.
      </footer>
    </main>
  );
}
