/*
 * Handle product CRUD operations with Strapi API
 */
import type { Product } from "@/types/product";
import type {
  StrapiCollectionResponse,
  StrapiSingleResponse,
  StrapiProductRaw,
} from "@/types/strapi";
import strapiFetch from "@/utils/strapiFetch";
import { toProducts, toProduct } from "./product.adapter";

const POPULATE =
  "populate[sizes]=true" +
  "&populate[brand]=true" +
  "&populate[material]=true" +
  "&populate[Specifications]=true" +
  "&populate[productColor][populate][Image]=true" +
  "&populate[productColor][populate][color]=true" +
  "&populate[mainImage]=true";

export async function loadRawAll(): Promise<StrapiProductRaw[]> {
  const response = await strapiFetch<
    StrapiCollectionResponse<StrapiProductRaw>
  >(`/products?${POPULATE}`, {
    next: { revalidate: 60 },
  });

  return response.data ?? [];
}

export async function loadRaw(
  documentId: string,
): Promise<StrapiProductRaw | null> {
  const response = await strapiFetch<StrapiSingleResponse<StrapiProductRaw>>(
    `/products/${documentId}?${POPULATE}`,
    { next: { revalidate: 60 } },
  );

  return response.data ?? null;
}

export async function loadAll(): Promise<Product[]> {
  const raw = await loadRawAll();
  console.log("raw :>> ", raw);
  return toProducts(raw);
}

export async function load(documentId: string): Promise<Product | null> {
  const raw = await loadRaw(documentId);
  return raw ? toProduct(raw) : null;
}
