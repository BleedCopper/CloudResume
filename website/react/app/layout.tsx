import type { Metadata } from "next";
import "./assets/globals.css";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";

export const metadata: Metadata = {
  title: "Rissa Quindoza",
  description: "Rissa Quindoza Cloud Resume",
  icons: {
    icon: "/icon.png", // /public path
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-primary max-w-7xl m-auto p-0 font-normal"
        }
      >
        {children}
      </body>
    </html>
  );
}
