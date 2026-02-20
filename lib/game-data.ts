export type Game = {
  id: number;
  title: string;
  slug: string;
};

export const games: Game[] = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  title: `Neon Arena ${index + 1}`,
  slug: `neon-arena-${index + 1}`,
}));
