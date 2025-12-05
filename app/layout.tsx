"use client";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Script from "next/script";

const Satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Satoshi.className}>
      <body className={Satoshi.className}>
        <Script
          src="https://kit.fontawesome.com/04c14c9989.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
