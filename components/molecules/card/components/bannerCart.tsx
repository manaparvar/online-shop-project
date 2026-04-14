import { BannerCardProps } from "../card.types";
import { Content, Image, ImageWrapper, Title } from "../styles";
const brandCard = ({ variant, image, title }: BannerCardProps) => (
  <>
    {image && (
      <ImageWrapper $variant={variant}>
        <Image
          $variant={variant}
          alt={title ?? "brand logo"}
          fill
          objectFit="cover"
          src={image}
        />
      </ImageWrapper>
    )}

    <Content $variant={variant}>
      {title && <Title $variant={variant}>{title}</Title>}
    </Content>
  </>
);
export default brandCard;
