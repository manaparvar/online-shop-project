import { Heart, ShoppingBag, X, SearchIcon, ChevronDown } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { textVariants } from "../../../../../styles/variants";

export type IconName =
  | "heart"
  | "shoppingBag"
  | "close"
  | "search"
  | "dropDown";

export const iconsMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  shoppingBag: ShoppingBag,
  close: X,
  search: SearchIcon,
  dropDown: ChevronDown,
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
  {
    fontVariant: "caption",
    icon: "search",
    label: "Search",
  },
  {
    fontVariant: "caption",
    icon: "dropDown",
    label: "DropDown",
  },
] as const;
