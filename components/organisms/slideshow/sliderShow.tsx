import { useRef } from "react";
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
import Slide from "../../molecules/slide";
import type { StaticImageData } from "next/image";
import type ColorKey from "@/types/colorKey.type";

export type Slide = {
  title: {
    end: string;
    endColor: ColorKey;
    start: string;
    startColor: ColorKey;
  };
  buttonLabel: string;
  color: ColorKey;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  textColor: ColorKey;
};

export default function SliderShow({ slides }: { slides?: Slide[] }) {
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
        {slides?.map((slide, index) => (
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
          pages={slides?.length ?? 0}
          scrollToPage={scrollToPage}
        />
      </DotsContainer>
    </MainWrapper>
  );
}
