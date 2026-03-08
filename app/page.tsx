import type { Metadata } from "next";

import Header from "./components/organisms/headerComponents/Header";
import Footer from "./components/footer";
import { StyledFooter } from "./page.style";
// import Content from "./components/Content";

export const metadata: Metadata = {
  title: "This is the home page",
  description:
    "I want to say something related to online shop and consider SEO",
};

export default function Home() {
  return (
    <>
      <Header />
      {/* <Content /> */}
      <StyledFooter />
    </>
  );
}
