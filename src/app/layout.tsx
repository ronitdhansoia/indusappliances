import type { Metadata } from "next";
import { Mona_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indus Appliances | OEM & ODM Appliance Manufacturer, India",
  description:
    "India's trusted OEM & ODM partner since 2004. Water heaters, kitchen hoods, washing machines, air coolers, fans, motors and air fryers. 50 million products supplied to 50+ global brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${monaSans.variable} ${geist.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
