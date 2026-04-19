import { useEffect, useState } from "react";
import { Content, ImageWrapper, PriceRow } from "../styles";
import ColorSwatches from "./colorSwatches";
import { CardProps } from "../card.types";
import Badge from "@/components/atoms/badge/badge";
import Button from "@/components/atoms/button/button";
import Image from "@/components/atoms/image/image";
import Row from "@/components/atoms/grid/row";
import Column from "@/components/atoms/grid/column";
import Heading from "@/components/atoms/heading/heading";
import Text from "@/components/atoms/text/text";
const ProductCard = ({
  variant,
  image,
  title,
  subtitle,
  price,
  oldPrice,
  discount,
  buttonLabel,
  onButtonClick,
  onSelectFavorite,
  productOptions,
}: CardProps) => {
  const [selectedOption, setSelectedOption] = useState(
    productOptions?.options?.[0]?.id ?? "",
  );
  const [selectFavorite, setSelectFavorite] = useState(false);
  const nextSrc =
    productOptions?.options?.find((opt: any) => opt.id === selectedOption)
      ?.img || image;

  const [displayedSrc, setDisplayedSrc] = useState(nextSrc);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!nextSrc || nextSrc === displayedSrc) return;

    setVisible(false);

    const timeout = setTimeout(() => {
      setDisplayedSrc(nextSrc);
      setVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [nextSrc, displayedSrc]);

  return (
    <>
      {discount && <Badge>{discount}</Badge>}

      {productOptions?.options && (
        <ColorSwatches
          options={productOptions.options}
          selectedId={selectedOption}
          onSelect={(id) => setSelectedOption(id)}
        />
      )}

      {image && (
        <ImageWrapper $variant={variant}>
          <Image
            src={displayedSrc}
            alt={title ?? "product image"}
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            $visible={visible}
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      )}

      <Content $variant={variant}>
        {(price || oldPrice) && (
          <PriceRow>
            {price && <Heading tag="h2">{price}</Heading>}
            {oldPrice && (
              <Heading
                color="text.disabled"
                tag="h3"
                textDecoration="line-through"
              >
                {oldPrice}
              </Heading>
            )}
          </PriceRow>
        )}
        {title && (
          <Heading tag="h3" noWrap>
            {title}
          </Heading>
        )}
        {subtitle && <Text>{subtitle}</Text>}

        {buttonLabel && (
          <Row>
            <Column sm={8} lg={8}>
              <Button
                block
                size="md"
                color="black"
                textColor="white"
                onClick={(e: any) => {
                  e.stopPropagation();
                  onButtonClick?.();
                }}
              >
                {buttonLabel}
              </Button>
            </Column>
            <Column sm={3} lg={3} offset={{ sm: 1, lg: 1 }}>
              <Button
                size="md"
                iconOnly
                color="black"
                onClick={(e: any) => {
                  e.stopPropagation();
                  setSelectFavorite(!selectFavorite);
                  onSelectFavorite?.(selectFavorite);
                }}
                outline
                startIcon="heart"
                startIconProps={{
                  color: selectFavorite ? "red" : "black",
                  isFilled: selectFavorite,
                }}
                textColor="black"
              />
            </Column>
          </Row>
        )}
      </Content>
    </>
  );
};

export default ProductCard;
