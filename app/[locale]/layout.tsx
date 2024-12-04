import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jean-Christophe Fontaine",
  description: "Next App by JC",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  // Attendre la résolution de params
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
