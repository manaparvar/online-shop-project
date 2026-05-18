export type CardVariant = "product" | "category" | "banner";

export type ProductOptionItem = {
  id: string;
  img?: string;
  color: string;
};

export type ProductOptions = {
  options: ProductOptionItem[];
};

export interface CardProps {
  variant: CardVariant;
  image?: string;
  title?: string;
  subtitle?: string;
  price?: string;
  oldPrice?: string;
  discount?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  onSelectFavorite?: (isFavorite: boolean) => void;
  onClick?: () => void;
  productOptions?: ProductOptions;
}
export interface WrapperProps {
  $variant: CardVariant;
  $clickable: boolean;
}

export interface VariantProps {
  $variant: CardVariant;
}

export type ColorOption = {
  id: string;
  color: string;
  img?: string;
};

export interface ColorSwatchesProps {
  options: ColorOption[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export interface SwatchProps {
  $color: string;
  $active: boolean;
}

export type BannerCardProps = Pick<CardProps, "variant" | "image" | "title">;
