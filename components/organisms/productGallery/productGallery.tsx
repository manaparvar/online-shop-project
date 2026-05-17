"use client";
import { useRef, useState } from "react";
import ImageMagnifier from "@/components/molecules/imageMagnifier/imageMagnifier";
import useScrollCarousel from "@/components/hooks/useScrollCarousel";
import ProductCardController from "../cardCarousel/components/cardCarouselController";
import Image from "@/components/atoms/image/image";
import {
  Item,
  ScrollContainer,
  SliderColumnWrapper,
  ViewportWrapper,
  Wrapper,
} from "./productGallery.style";
const ProductGallary = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const image = [
    {
      img: "/images/sampleProduct/whiteShoes.png",
      thumb: "/images/sampleProduct/whiteShoes.png",
    },
    {
      img: "/images/greyShoe.png",
      thumb: "/images/greyShoe.png",
    },
    {
      img: "/images/shoe.png",
      thumb: "/images/shoe.png",
    },
    {
      img: "/images/purse.png",
      thumb: "/images/purse.png",
    },
    {
      img: "/images/men.png",
      thumb: "/images/men.png",
    },
    {
      img: "/images/sampleProduct/whiteShoes.png",
      thumb: "/images/sampleProduct/whiteShoes.png",
    },
    {
      img: "/images/greyShoe.png",
      thumb: "/images/greyShoe.png",
    },
    {
      img: "/images/shoe.png",
      thumb: "/images/shoe.png",
    },
    {
      img: "/images/purse.png",
      thumb: "/images/purse.png",
    },
    {
      img: "/images/men.png",
      thumb: "/images/men.png",
    },
  ];
  const [currentPic, setPic] = useState(1);
  const { page, pages, next, prev, scrollToPage, canGoPrev, canGoNext } =
    useScrollCarousel({
      containerRef: viewportRef,
    });

  return (
    <ViewportWrapper>
      <SliderColumnWrapper>
        <ImageMagnifier
          src={image[currentPic].img}
          width={400}
          height={300}
          zoom={2}
          lensSize={80}
        />
      </SliderColumnWrapper>

      <Wrapper>
        <ScrollContainer ref={viewportRef}>
          {image.map((item, i) => (
            <Item key={i} onClick={() => setPic(i)}>
              <Image src={item.thumb} alt="thumb" fill />
            </Item>
          ))}
        </ScrollContainer>
        <ProductCardController
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
          next={next}
          pages={pages}
          prev={prev}
          showArrows
          justify="space-between"
        />
      </Wrapper>
    </ViewportWrapper>
  );
};
export default ProductGallary;
