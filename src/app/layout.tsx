import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Bg from "@/components/bg";
import MusicPlayer from "@/components/musicPlayer";
import Message from "@/components/message";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "AMSTUFF.EU",
  description:
    "Oficjalna strona Amstera. Posłuchaj na Spotify: https://open.spotify.com/artist/09yDJTGFIvWYKdU6apskTP. Śledź na Instagramie: https://www.instagram.com/amsterwth_/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} antialiased`}>
        <Bg />
        <MusicPlayer />
        <Message />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
