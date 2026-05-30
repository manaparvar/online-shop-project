"use client";
/**
 * Cart Component
 */

// Types
import { CardProps } from "./card.types";

// Styles
import { CardWrapper } from "./styles";

import CardByVariant from "./components/cardByVariant";

function Card({
  buttonLabel,
  discount,
  image,
  oldPrice,
  onButtonClick,
  onClick,
  onSelectFavorite,
  price,
  productOptions,
  subtitle,
  title,
  variant,
}: CardProps) {
  const clickable = Boolean(onClick);
  return (
    <CardWrapper
      $clickable={clickable}
      $variant={variant}
      onClick={onClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      <CardByVariant
        buttonLabel={buttonLabel}
        discount={discount}
        image={image}
        oldPrice={oldPrice}
        onButtonClick={onButtonClick}
        onSelectFavorite={onSelectFavorite}
        price={price}
        productOptions={productOptions}
        subtitle={subtitle}
        title={title}
        variant={variant}
      />
    </CardWrapper>
  );
}

export default Card;
