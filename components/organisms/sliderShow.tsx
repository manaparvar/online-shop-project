import { useState, useRef } from "react";
import useScrollCarousel from "@/components/hooks/useScrollCarousel";
import {
  SliderWrapper,
  PrevButton,
  NextButton,
  MainWrapper,
  Controller,
} from "./sliderShow.style";
import Slide from "./../molecules/slide";
import Dots from "./carousel/productCard/dots";
import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.png";

export const SliderData = [
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "Yellow",
      endColor: "White",
    },
    description: "Only smart casual outfits",
    color: "yellow",
    buttonLabel: "Shop Now",
    textColor: "white",
    image: slider1,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "Yellow",
      endColor: "White",
    },
    description: "Only smart casual outfits",
    color: "yellow",
    buttonLabel: "Shop Now",
    textColor: "white",
    image: slider2,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "Yellow",
      endColor: "White",
    },
    description: "Only smart casual outfits",
    color: "yellow",
    buttonLabel: "Shop Now",
    textColor: "white",
    image: slider3,
    imageAlt: "Men autumn autfits",
  },
];

export default function SliderShow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { page, pages, next, prev, scrollToPage } = useScrollCarousel({
    containerRef,
  });
  const responsiveSizes = {
    sm: "sm",
    md: "md",
    lg: "xl",
    xl: "xl",
    "2xl": "2xl",
  };

  return (
    <MainWrapper>
      <SliderWrapper ref={containerRef}>
        {SliderData.length > 0 &&
          SliderData.map((slide, index) => (
            <Slide
              key={`slider_${index}`}
              title={{
                start: "Spring",
                end: "Collection",
                startColor: "danger",
                endColor: "background",
              }}
              description="Only smart casual outfits"
              color="yellow"
              buttonLabel="Shop Now"
              textColor="background"
              image={slide.image}
              imageAlt="Men autumn outfits"
            />
          ))}
      </SliderWrapper>
      <Controller>
        <PrevButton
          textColor="white"
          startIcon="chevronLeft"
          size="sm"
          responsive={responsiveSizes}
          startIconProps={{
            color: "background",
            strokeWidth: 3,
          }}
          style={{ opacity: 0.5 }}
          iconOnly
          onClick={prev}
        />
        <NextButton
          startIcon="chevronRight"
          iconOnly
          onClick={next}
          size="sm"
          responsive={responsiveSizes}
          startIconProps={{
            color: "background",
            strokeWidth: 3,
          }}
          style={{ opacity: 0.5 }}
        />
      </Controller>
      <Dots />
    </MainWrapper>
  );
}
