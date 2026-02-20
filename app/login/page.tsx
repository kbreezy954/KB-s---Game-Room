import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { SiteNav } from "@/components/site-nav";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neon-gradient pb-12">
      <SiteNav />
      <section className="mx-auto w-[min(1000px,95%)] py-8">
        <AuthForm mode="login" />
        <p className="mt-4 text-center text-sm text-white/60">
          New here? <Link className="text-neonCyan" href="/register">Create an account</Link>
        </p>
      </section>
    </main>
  );
}
