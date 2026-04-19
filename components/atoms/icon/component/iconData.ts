import {
  LucideIcon,
  Heart,
  ShoppingBag,
  X,
  SearchIcon,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { textVariants } from "@/styles/variants";

export type IconName =
  | "heart"
  | "shoppingBag"
  | "close"
  | "search"
  | "dropDown"
  | "chevronRight"
  | "chevronLeft"
  | "instagram"
  | "facebook"
  | "youtube"
  | "twitter";

export const iconsMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  shoppingBag: ShoppingBag,
  close: X,
  search: SearchIcon,
  dropDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
} as const;

type IconItem = {
  fontVariant?: keyof typeof textVariants;
  icon: IconName;
  label?: string;
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
  {
    fontVariant: "caption",
    icon: "chevronRight",
    label: "ChevronRight",
  },
  {
    fontVariant: "caption",
    icon: "chevronLeft",
    label: "ChevronLeft",
  },
  {
    fontVariant: "caption",
    icon: "instagram",
  },
  {
    fontVariant: "caption",
    icon: "facebook",
  },
  {
    fontVariant: "caption",
    icon: "youtube",
  },
  {
    fontVariant: "caption",
    icon: "twitter",
  },
] as const;
