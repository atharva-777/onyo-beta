import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Head from "next/head";
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
      <head>
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BN7FLE3G21"></Script>
       <Script> {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
         gtag('config', 'G-BN7FLE3G21');` }</Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
