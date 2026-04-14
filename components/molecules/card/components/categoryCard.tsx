import { CardProps } from "../card.types";
import { Overlay, Content, Image, ImageWrapper, Title } from "../styles";

const CategoryCard = ({ variant, image, title }: CardProps) => (
  <>
    {image && (
      <ImageWrapper $variant={variant}>
        <Image
          $variant={variant}
          alt={title ?? "banner image"}
          fill
          objectFit="cover"
          src={image}
        />
      </ImageWrapper>
    )}

    <Overlay />
    <Content $variant={variant}>
      {title && <Title $variant={variant}>{title}</Title>}
    </Content>
  </>
);

export default CategoryCard;
