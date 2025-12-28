import type { Metadata } from "next";

import Header from "./components/Header";
// import Footer from "./components/Footer";
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
      {/* <Footer /> */}
    </>
  );
}
