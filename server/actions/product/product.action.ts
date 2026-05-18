/*
 * Handle product CRUD operations with Strapi API
 */
import { Product } from "@/types/product";
import { StrapiCollectionResponse } from "@/types/strapi";
import strapiFetch from "@/utils/strapiFetch";

export async function loadAll(): Promise<Product[]> {
  const response = await strapiFetch<StrapiCollectionResponse<Product>>(
    "/products?populate=*&filters[isActive][$eq]=true",
    { next: { revalidate: 60 } },
  );

  return response.data;
}

export async function load(slug: string): Promise<Product | null> {
  const response = await strapiFetch<StrapiCollectionResponse<Product>>(
    `/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
    { next: { revalidate: 60 } },
  );

  return response.data[0] ?? null;
}
