import type { Brand } from "@/types/brand";
import type { StrapiBrand } from "@/types/strapi";

function buildImageUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  const base =
    process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace(/\/api\/?$/, "") ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function toBrand(raw: StrapiBrand): Brand {
  return {
    id: raw.id,
    documentId: raw.documentId,
    name: raw.name,
    logoUrl: buildImageUrl(raw.logo?.url),
  };
}

export function toBrands(
  rawList: StrapiBrand[] | null | undefined,
): Brand[] {
  if (!rawList) return [];
  return rawList.map(toBrand);
}
