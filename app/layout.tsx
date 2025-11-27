"use client";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

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
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
