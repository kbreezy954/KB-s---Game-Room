import Link from "next/link";
import { Game } from "@/lib/game-data";

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <article className="glass-panel group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-neonCyan/70 hover:shadow-neon">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neonCyan/40 bg-black/40 text-xl text-neonCyan">
        🎮
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{game.title}</h3>
      <p className="mb-5 text-sm text-white/60">Arcade combat simulation in neon space.</p>
      <Link
        href={`/games/${game.slug}`}
        className="inline-flex rounded-full border border-electricBlue/40 bg-electricBlue/20 px-4 py-2 text-sm font-medium text-white transition group-hover:border-neonMagenta group-hover:bg-neonMagenta/20"
      >
        Play
      </Link>
    </article>
  );
};
