import { useRef, useEffect } from "react";
import useScrollCarousel from "@/components/hooks/useScrollCarousel";
import {
  SliderWrapper,
  PrevButton,
  NextButton,
  MainWrapper,
  Controller,
  DotsWrapper,
  DotsContainer,
} from "./sliderShow.style";
import Slide from "./../molecules/slide";
import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.png";

export const Slides = [
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
    image: slider1,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
    image: slider2,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
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
        {Slides.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            description={slide.description}
            color={slide.color}
            buttonLabel={slide.buttonLabel}
            textColor={slide.textColor}
            image={slide.image}
            imageAlt={slide.imageAlt}
          />
        ))}
      </SliderWrapper>
      <Controller>
        <PrevButton
          color="primary"
          textColor="background"
          startIcon="chevronLeft"
          size="sm"
          responsive={responsiveSizes}
          startIconProps={{
            color: "background",
            strokeWidth: 3,
          }}
          iconOnly
          onClick={prev}
        />
        <NextButton
          color="primary"
          textColor="background"
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
      <DotsContainer>
        <DotsWrapper
          page={page}
          pages={Slides.length}
          scrollToPage={scrollToPage}
        />
      </DotsContainer>
    </MainWrapper>
  );
}
