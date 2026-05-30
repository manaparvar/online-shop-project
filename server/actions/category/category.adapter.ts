import type { Category } from "@/types/category";
import type { StrapiCategory } from "@/types/strapi";

function buildImageUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  const base =
    process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace(/\/api\/?$/, "") ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function toCategory(raw: StrapiCategory): Category {
  return {
    id: raw.id,
    documentId: raw.documentId,
    name: raw.name,
    imageUrl: buildImageUrl(raw.image?.url),
  };
}

export function toCategories(
  rawList: StrapiCategory[] | null | undefined,
): Category[] {
  if (!rawList) return [];
  return rawList.map(toCategory);
}
