import { CardProps } from "../card.types";
import { Overlay, Content, ImageWrapper, Title } from "../styles";
import Image from "@/components/atoms/image/image";

const CategoryCard = ({ variant, image, title }: CardProps) => (
  <>
    {image && (
      <ImageWrapper $variant={variant}>
        <Image
          $visible
          alt={title ?? "Category image"}
          fill
          objectFit="cover"
          src={image}
        />
      </ImageWrapper>
    )}

    <Overlay />
    <Content $variant={variant}>
      {title && (
        <Title $variant={variant} tag="h2">
          {title}
        </Title>
      )}
    </Content>
  </>
);

export default CategoryCard;
