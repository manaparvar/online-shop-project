import { BannerCardProps } from "../card.types";
import { Content, ImageWrapper, Title } from "../styles";
import Image from "@/components/atoms/image/image";
const brandCard = ({ variant, image, title }: BannerCardProps) => (
  <>
    {image && (
      <ImageWrapper $variant={variant}>
        <Image
          $visible
          alt={title ?? "brand logo"}
          fill
          objectFit="cover"
          src={image}
        />
      </ImageWrapper>
    )}

    <Content $variant={variant}>
      {title && (
        <Title tag="h4" $variant={variant}>
          {title}
        </Title>
      )}
    </Content>
  </>
);
export default brandCard;
