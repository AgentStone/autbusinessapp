import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workstack | Security, AI & business tools",
  description: "Explore a concept catalog of cybersecurity, AI safety and governance, business risk, and workflow tools. Compare proposed toolkits and preview bundles.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
