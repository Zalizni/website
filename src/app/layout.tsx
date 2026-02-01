import type { Metadata } from "next";
import "./globals.css";
import { helios, onest } from "@/theme/fonts";

export const metadata: Metadata = {
  title: "ТИША",
  appleWebApp: {
    title: "Tysha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${onest.variable} ${helios.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
