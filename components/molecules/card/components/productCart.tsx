import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Content,
  ImageWrapper,
  OldPrice,
  Price,
  PriceRow,
  Subtitle,
  Title,
} from "../styles";
import ColorSwatches from "./colorSwatches";
import { CardProps } from "../card.types";
import Badge from "@/components/atoms/badge/badge";
import Button from "@/components/atoms/button/button";
import Icon from "@/components/atoms/icon/icon";
import { AnimatedImage } from "../styles/productCart.styles";
import Row from "@/components/atoms/grid/row";
import Column from "@/components/atoms/grid/column";

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
          <AnimatedImage
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
          {(price || oldPrice) && (
            <PriceRow>
              {price && <Price>{price}</Price>}
              {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
            </PriceRow>
          )}
        </ImageWrapper>
      )}

      <Content $variant={variant}>
        {title && <Title $variant={variant}>{title}</Title>}
        {subtitle && <Subtitle $variant={variant}>{subtitle}</Subtitle>}

        {buttonLabel && (
          <Row>
            <Column sm={10}>
              <Button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick?.();
                }}
              >
                {buttonLabel}
              </Button>
            </Column>
            <Column sm={2}>
              <Button
                type="button"
                $iconButton
                $isFavorite={selectFavorite}
                onClick={(e) => {
                  e.stopPropagation();

                  setSelectFavorite(!selectFavorite);
                  onSelectFavorite?.(selectFavorite);
                }}
              >
                <Icon icon="heart" />
              </Button>
            </Column>
          </Row>
        )}
      </Content>
    </>
  );
};
const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: flex;
`;
export default ProductCard;
