import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAB Synergy | Cybersecurity, AI & business toolkits",
  description: "Explore practical cybersecurity, AI governance, and workflow toolkits designed to simplify complex work.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/images/cab-synergy-icon.png",
    shortcut: "/images/cab-synergy-icon.png",
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
