import { Heart, ShoppingBag, X, Search } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { textVariants } from "../Atoms/text/variants";

export type IconName = "heart" | "shoppingBag" | "close" | "search";

export const iconsMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  shoppingBag: ShoppingBag,
  close: X,
  search: Search,
} as const;

type IconItem = {
  fontVariant?: keyof typeof textVariants;
  icon: IconName;
  label: string;
};

export const icons: IconItem[] = [
  {
    fontVariant: "button",
    icon: "shoppingBag",
    label: "Cart",
  },
  {
    fontVariant: "button",
    icon: "heart",
    label: "Favorites",
  },
  {
    fontVariant: "caption",
    icon: "close",
    label: "Close",
  },
] as const;
