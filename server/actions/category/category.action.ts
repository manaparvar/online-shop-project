import type { StrapiCollectionResponse, StrapiCategory } from "@/types/strapi";
import type { Category } from "@/types/category";
import strapiFetch from "@/utils/strapiFetch";
import { toCategories } from "./category.adapter";

const POPULATE = "populate[image]=true";

export async function loadRawMainCategories(): Promise<StrapiCategory[]> {
  const response = await strapiFetch<StrapiCollectionResponse<StrapiCategory>>(
    `/categories?${POPULATE}&filters[category][$null]=true`,
    { next: { revalidate: 60 } },
  );
  return response.data ?? [];
}

export async function loadMainCategories(): Promise<Category[]> {
  const raw = await loadRawMainCategories();
  return toCategories(raw);
}
