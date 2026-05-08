import { URL } from "url";
import Button from "../atoms/button/button";
import Column from "../atoms/grid/column";
import Row from "../atoms/grid/row";
import Heading from "../atoms/heading/heading";
import Image from "../atoms/image/image";
import Text from "../atoms/text/text";
import ColorKey from "@/types/colorKey.type";
import { StaticImageData } from "next/image";

type SliderProps = {
  title: string;
  description: string;
  color: string;
  buttonLabel: string;
  textColor: ColorKey;
  image: string | StaticImageData;
  imageAlt: string;
};

export default function Slide({
  title,
  description,
  color,
  buttonLabel,
  textColor,
  image,
  imageAlt,
}: SliderProps) {
  return (
    <Row>
      <Image fill src={image} alt={imageAlt} />
      <Row>
        <Column sm={6} lg={5} offset={{ sm: 6, lg: 7 }}>
          <Heading tag="h2" textColor={textColor}>
            {title}
          </Heading>
          <Heading tag="h2" textColor={textColor}>
            {title}
          </Heading>
          <hr />
          <Text variant="button">{description}</Text>
          <hr />
          <Button
            block
            center
            color={color}
            rounded
            textColor={textColor}
            type="button"
          >
            {buttonLabel}
          </Button>
        </Column>
      </Row>
    </Row>
  );
}
