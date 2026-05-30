import type { StrapiCollectionResponse, StrapiBrand } from "@/types/strapi";
import type { Brand } from "@/types/brand";
import strapiFetch from "@/utils/strapiFetch";
import { toBrands } from "./brand.adapter";

const POPULATE = "populate[logo]=true";

export async function loadRawTopBrands(
  limit: number = 10,
): Promise<StrapiBrand[]> {
  const response =
    await strapiFetch<StrapiCollectionResponse<StrapiBrand>>(
      `/brands?${POPULATE}&pagination[limit]=${limit}`,
      { next: { revalidate: 60 } },
    );
  return response.data ?? [];
}

export async function loadTopBrands(limit: number = 10): Promise<Brand[]> {
  const raw = await loadRawTopBrands(limit);
  return toBrands(raw);
}
