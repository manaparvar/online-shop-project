import type { Product, ProductColorOptions } from "@/types/product";
import type { StrapiProductColor, StrapiProductRaw } from "@/types/strapi";

function buildImageUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  const base =
    process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace(/\/api\/?$/, "") ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function toSlug(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `product-${Date.now()}`
  );
}

export function toProductColorOptions(
  colors: StrapiProductColor[] | null | undefined,
): ProductColorOptions | undefined {
  if (!colors || colors.length === 0) return undefined;

  return {
    options: colors.map((pc) => ({
      id: String(pc.id),
      color: pc.color.code,
      img: buildImageUrl(pc.Image?.url),
    })),
  };
}

export function toProduct(raw: StrapiProductRaw): Product {
  const originalPrice = raw.original_price ?? null;
  const discount =
    originalPrice && raw.price
      ? Math.round((1 - raw.price / originalPrice) * 100)
      : null;

  return {
    id: raw.id,
    documentId: raw.documentId,
    title: raw.title,
    slug: toSlug(raw.title),
    description: raw.description ?? undefined,
    price: raw.original_price?.toString(),
    salePrice: raw.price,
    originalPrice: originalPrice?.toString(),
    discount: discount ? `${discount}%` : undefined,
    imageUrl: buildImageUrl(raw.mainImage?.url),
    isFavorite: false,
    colorOptions: toProductColorOptions(raw.productColor),
    special_offer: raw.special_offer,
  };
}

export function toProducts(
  rawList: StrapiProductRaw[] | null | undefined,
): Product[] {
  if (!rawList) return [];
  return rawList.map(toProduct);
}
