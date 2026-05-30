export type StrapiCollectionResponse<T> = {
  data: T[];
  meta?: unknown;
};

export type StrapiSingleResponse<T> = {
  data: T | null;
  meta?: unknown;
};

export type StrapiMedia = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
};

export type StrapiBrand = {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  logo?: StrapiMedia | null;
};

export type StrapiSize = {
  id: number;
  documentId: string;
  name: string;
};

export type StrapiSpecification = {
  id: number;
  title: string;
  description: string;
};

export type StrapiProductColor = {
  id: number;
  Image?: StrapiMedia | null;
  color: {
    id: number;
    documentId: string;
    name: string;
    code: string;
    description: string | null;
  };
};

export type StrapiProductRaw = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  price: number;
  original_price?: number | undefined;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mainImage: StrapiMedia | null;
  sizes: StrapiSize[];
  brand: StrapiBrand | null;
  material: StrapiBrand | null;
  specification: StrapiSpecification[];
  productColor: StrapiProductColor[];
  related_products: unknown[];
  special_offer: boolean;
};
