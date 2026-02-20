import { DashboardPanel } from "@/components/dashboard-panel";
import { SiteNav } from "@/components/site-nav";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neon-gradient pb-12">
      <SiteNav />
      <DashboardPanel />
    </main>
  );
}
