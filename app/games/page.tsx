import { GameCard } from "@/components/game-card";
import { SiteNav } from "@/components/site-nav";
import { games } from "@/lib/game-data";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-neon-gradient pb-12">
      <SiteNav />
      <section className="mx-auto w-[min(1100px,95%)]">
        <h1 className="neon-text mb-6 text-4xl font-bold">All Games</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}
