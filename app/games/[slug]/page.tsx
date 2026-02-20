import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

type GameDetailPageProps = {
  params: { slug: string };
};

export default function GameDetailPage({ params }: GameDetailPageProps) {
  return (
    <main className="min-h-screen bg-neon-gradient pb-12">
      <SiteNav />
      <section className="glass-panel mx-auto w-[min(900px,95%)] rounded-3xl p-8 text-center">
        <h1 className="neon-text mb-3 text-4xl font-bold">{params.slug.replace(/-/g, " ")}</h1>
        <p className="mb-6 text-white/65">Gameplay coming soon. This page is a placeholder route for future game logic.</p>
        <Link href="/games" className="rounded-full border border-neonCyan/60 px-5 py-2 text-neonCyan hover:shadow-neon">
          Back to Games
        </Link>
      </section>
    </main>
  );
}
