import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import ParticlesMain from "@/components/Particles";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Texus x Hackverse",
  description: "Created By Hackverse x Texus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={orbitron.className}
      >
        <ParticlesMain />
        {children}
      </body>
    </html>
  );
}
