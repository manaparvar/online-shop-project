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

export default function SliderShow({ slides }: { slides: any[] }) {
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
        {slides.map((slide, index) => (
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
          pages={slides.length}
          scrollToPage={scrollToPage}
        />
      </DotsContainer>
    </MainWrapper>
  );
}
