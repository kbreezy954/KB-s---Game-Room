import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/games", label: "Games" },
];

export const SiteNav = () => {
  return (
    <nav className="glass-panel sticky top-0 z-20 mx-auto mb-10 flex w-[min(1100px,95%)] items-center justify-between rounded-2xl px-6 py-4">
      <p className="text-lg font-semibold tracking-wide neon-text">KB&apos;s Game Room</p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-neonCyan hover:text-neonCyan hover:shadow-neon"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
