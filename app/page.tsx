import type { Metadata } from "next";
import Header from "./components/organisms/headerComponents/Header";
import { PageWrapper, Main, StyledFooter } from "./page.style";

// import Content from "./components/Content";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "This is a fashion online shop.",
};

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Main>aaaa</Main>
      <StyledFooter />
    </PageWrapper>
  );
}
