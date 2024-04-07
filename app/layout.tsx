import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoliday",
  description: "Don't just dream it, Yoliday-it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
     

      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-BN7FLE3G21" />
    </html>
    </>
  );
}
