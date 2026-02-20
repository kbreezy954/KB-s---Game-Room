import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KB's Game Room",
  description: "Play. Compete. Dominate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
