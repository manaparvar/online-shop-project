export type ProductVariant = {
  id: number;
  sku: string;
  size: string;
  color: string;
  price: number;
  salePrice?: number | null;
  stock: number;
  isActive?: boolean;
};

export type Product = {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  salePrice?: number | null;
  imageUrl?: string;
  variants: ProductVariant[];
  isFavorite?: boolean;
};
