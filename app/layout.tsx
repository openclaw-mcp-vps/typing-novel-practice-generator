import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Typing Practice Generator — Turn Any Text Into Typing Sessions",
  description: "Convert books, articles, or code into structured typing practice sessions with real-time WPM tracking and progress analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2fdf22e0-c17f-4520-b13f-569b6f0ce455"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
