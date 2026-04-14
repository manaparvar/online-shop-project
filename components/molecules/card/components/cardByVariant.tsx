// Types
import { CardProps } from "../card.types";

// components
import BannerCard from "./bannerCart";
import CategoryCard from "./categoryCard";
import ProductCard from "./productCart";

const CardByVariant = ({
  buttonLabel,
  discount,
  image,
  oldPrice,
  onButtonClick,
  onSelectFavorite,
  price,
  productOptions,
  subtitle,
  title,
  variant,
}: CardProps) => {
  switch (variant) {
    case "product":
      return (
        <ProductCard
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
      );

    case "category":
      return (
        <CategoryCard
          image={image}
          onButtonClick={onButtonClick}
          title={title}
          variant={variant}
        />
      );

    case "banner":
      return <BannerCard variant={variant} image={image} title={title} />;

    default:
      return <></>;
  }
};

export default CardByVariant;
