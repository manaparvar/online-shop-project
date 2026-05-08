import { useState, useRef } from "react";
import useScrollCarousel from "@/components/hooks/useScrollCarousel";
import Button from "../atoms/button/button";
import { ContentWrapper, SliderWrapper } from "./sliderShow.style";
import Slide from "./../molecules/slide";
import Dots from "./carousel/productCard/dots";
import slider1 from "@/public/slider1.png";

export const SliderData = {
  title: "SpringCollection",
  description: "Only smart casual outfits",
  color: "#C71D5B",
  buttonLabel: "Shop Now",
  textColor: "white",
  image: slider1,
  imageAlt: "Men autumn autfits",
};

/* type SliderProps = {
  autoPlay?: boolean;
  interval?: number;
}; */

export default function SliderShow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { page, pages, next, prev, scrollToPage } = useScrollCarousel({
    containerRef,
  });

  return (
    <SliderWrapper ref={containerRef}>
      <Slide
        title="Spring Collection"
        description="Only smart casual outfits"
        color="#C71D5B"
        buttonLabel="Shop Now"
        textColor="white"
        image={SliderData.image}
        imageAlt="Men autumn outfits"
      />
      <Button iconOnly onClick={prev} />
      <Button iconOnly onClick={next} />
      <Dots />
    </SliderWrapper>
  );
}
