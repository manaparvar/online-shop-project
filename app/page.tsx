import type { Metadata } from "next";
import { Main } from "./page.style";
import Carousel from "../components/organisms/carousel/carousel";
export const metadata: Metadata = {
  title: "Online Shop",
  description: "This is a fashion online shop.",
};

export default function Home() {
  return (
    <Main>
      <Carousel />
    </Main>
  );
}
