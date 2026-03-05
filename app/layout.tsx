import "./globals.css";
import localFont from "next/font/local";
import ThemeWrapper from "@/styles/themeWrapper";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "My App",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
