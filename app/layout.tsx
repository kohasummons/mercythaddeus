import type { Metadata } from "next";
import localFont from "next/font/local";
import { Romanesco } from "next/font/google";
import "./globals.css";

const romanesco = Romanesco({
  variable: "--font-romanesco",
  subsets: ["latin"],
  weight: "400",
});

const sfpro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
    },
    {
      path: "./fonts/SF-Pro-Display-Light.otf",
      weight: "300",
    },

    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
    },
    {
      path: "./fonts/SF-Pro-Display-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-sfpro",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mercy Thaddeus",
  description: "Mercy Thaddeus's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${romanesco.variable} ${sfpro.variable} antialiased max-w-[1440px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
