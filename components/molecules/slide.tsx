import Heading from "../atoms/heading/heading";

import Text from "../atoms/text/text";
import { useDevice } from "../hooks/useDevice";
import ColorKey from "@/types/colorKey.type";
import { StaticImageData } from "next/image";
import {
  StyledColumn,
  SlideWrapper,
  InnerRow,
  HeadingContainer,
  StyledImage,
  StyledButton,
} from "./slide.style";
import Column from "../atoms/grid/column";
import DividerLine from "../atoms/divider";
import { LineVariants } from "../atoms/divider/variants";

type SliderProps = {
  title: {
    start: string;
    end: string;
    startColor: ColorKey;
    endColor: ColorKey;
  };
  description: string;
  color: ColorKey;
  buttonLabel: string;
  textColor: ColorKey;
  image: string | StaticImageData;
  imageAlt: string;
  isLeft?: boolean;
};

export default function Slide({
  title: { start, end, startColor, endColor },
  description,
  color,
  buttonLabel,
  textColor,
  image,
  imageAlt,
  isLeft,
}: SliderProps) {
  const device = useDevice();
  const responsiveSizes = {
    sm: "md",
    md: "lg",
    lg: "xl",
    xl: "xl",
    "2xl": "2xl",
  };
  return (
    <SlideWrapper align="flex-end">
      <StyledImage
        src={image}
        alt={imageAlt}
        quality={85}
        objectFit="contain"
      />
      <InnerRow>
        <StyledColumn flex sm={7} md={7} lg={6}>
          <HeadingContainer>
            <Heading
              className="heading"
              tag={
                device === "lg" || device === "xl"
                  ? "h2"
                  : device === "md" || device === "sm"
                    ? "h3"
                    : "h4"
              }
              textColor={startColor}
            >
              {start}
            </Heading>
            <Heading
              className="heading"
              tag={
                device === "lg" || device === "xl"
                  ? "h2"
                  : device === "md" || device === "sm"
                    ? "h3"
                    : "h4"
              }
              textColor={endColor}
            >
              {end}
            </Heading>
          </HeadingContainer>
          <DividerLine
            lineType="sliderDivider"
            width={LineVariants.mobile.sliderDivider.width}
            height={LineVariants.mobile.sliderDivider.height}
            color={color}
            dash
          />
          <Text
            variant={
              device === "lg" || device === "xl" || device === "md"
                ? "button"
                : "caption"
            }
            color={textColor}
          >
            {description}
          </Text>
          <DividerLine
            lineType="sliderDivider"
            width={LineVariants.mobile.sliderDivider.width}
            height={LineVariants.mobile.sliderDivider.height}
            color={color}
            dash
          />
          <StyledButton
            color={color}
            rounded
            size="sm"
            textColor={textColor}
            type="button"
            responsive={responsiveSizes}
          >
            {buttonLabel}
          </StyledButton>
        </StyledColumn>

        <Column sm={5} md={5} lg={6}>
          &nbsp;
        </Column>
      </InnerRow>
    </SlideWrapper>
  );
}
