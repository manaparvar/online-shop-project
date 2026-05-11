import "./globals.css";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import ThemeWrapper from "@/styles/themeWrapper";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import Header from "../../organisms/header/header";
import { PageWrapper } from "./baseLayout.style";
import Container from "@/components/atoms/grid/container";
import Footer from "../../organisms/footer/footer";
export const metadata: Metadata = {
  title: "My App",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-rubik",
});

const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        <Script
          src="https://kit.fontawesome.com/04c14c9989.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeWrapper>
          <Header />

          <Container>{children}</Container>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
};

export default BaseLayout;
