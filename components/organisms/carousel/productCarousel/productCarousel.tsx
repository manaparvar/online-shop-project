"use client";

import { Children, useRef } from "react";
import useScrollCarousel from "../../../hooks/useScrollCarousel";
import { CarouselProps } from "./product.type";
import ProductCarouselController from "@/components/organisms/carousel/productCarousel/productCarouselController";
import { Item, Track, Viewport } from "./productCarousel.styles";
import Dots from "./dots";
export default function Carousel({
  title,
  seeAllHref,
  children,
  showDots = true,
  showArrows = true,
  mobileBasis = "78%",
  tabletBasis = "48%",
  desktopBasis = "23.5%",
  wideDesktopBasis = "18.8%",
  extraWideDesktopBasis = "15.5%",
  gap = "16px",
}: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  const { page, pages, next, prev, scrollToPage, canGoPrev, canGoNext } =
    useScrollCarousel({
      containerRef: viewportRef,
    });

  return (
    <>
      {(title || seeAllHref || showArrows) && (
        <ProductCarouselController
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
          next={next}
          pages={pages}
          prev={prev}
          seeAllHref={seeAllHref}
          showArrows={showArrows}
          title={title}
        />
      )}

      <Viewport ref={viewportRef}>
        <Track $gap={gap}>
          {Children.map(children, (child, index) => (
            <Item
              key={index}
              $mobileBasis={mobileBasis}
              $tabletBasis={tabletBasis}
              $desktopBasis={desktopBasis}
              $wideDesktopBasis={wideDesktopBasis}
              $extraWideDesktopBasis={extraWideDesktopBasis}
            >
              {child}
            </Item>
          ))}
        </Track>
      </Viewport>

      {showDots && pages > 1 && (
        <Dots page={page} pages={pages} scrollToPage={scrollToPage} />
      )}
    </>
  );
}
