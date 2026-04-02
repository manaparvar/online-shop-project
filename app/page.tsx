import type { Metadata } from "next";
import { Main } from "./page.style";
// import Content from "./components/Content";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "This is a fashion online shop.",
};

export default function Home() {
  return <Main>This is main page</Main>;
}
