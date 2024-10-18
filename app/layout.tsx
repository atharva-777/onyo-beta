import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Yoliday",
  icons: {
    icon: "/main_logo.png",
  },
  description:
    "Whether you're a foodie, a mountaineer, or a beach lover, Yoliday connects you with like-minded adventurers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`bg-white font-poppins text-black antialiased`}>
          {children}
        </body>
        <GoogleAnalytics gaId="G-BN7FLE3G21" />
      </html>
    </>
  );
}
