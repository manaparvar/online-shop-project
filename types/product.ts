export type Product = {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  description?: string;
  price: string | undefined;
  originalPrice: string | undefined;
  salePrice?: number;
  discount?: string;
  imageUrl?: string;
  isFavorite?: boolean;
  colorOptions?: ProductColorOptions;
  special_offer: boolean;
};

export type ProductColorOption = {
  id: string;
  color: string;
  img?: string;
};

export type ProductColorOptions = {
  options: ProductColorOption[];
};
