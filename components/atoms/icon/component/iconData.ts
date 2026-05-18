import {
  LucideIcon,
  Heart,
  ShoppingBag,
  X,
  SearchIcon,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  LogIn,
  UserPlus,
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
  | "twitter"
  | "chevron-right"
  | "chevron-left"
  | "logIn"
  | "userPlus";

export const iconsMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  shoppingBag: ShoppingBag,
  close: X,
  search: SearchIcon,
  dropDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
  logIn: LogIn,
  userPlus: UserPlus,
} as const;

type IconItem = {
  fontVariant?: keyof typeof textVariants;
  icon: IconName;
  label?: string;
  href?: string;
};
export const icons: IconItem[] = [
  {
    fontVariant: "button",
    icon: "shoppingBag",
    label: "Cart",
    href: "/cart",
  },
  {
    fontVariant: "button",
    icon: "heart",
    label: "Favorites",
    href: "/favorite",
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
    icon: "userPlus",
    label: "Signup",
    href: "/signup",
  },
  {
    fontVariant: "caption",
    icon: "logIn",
    label: "Login",
    href: "/login",
  },
  {
    fontVariant: "caption",
    icon: "instagram",
    href: "/instagram",
  },
  {
    fontVariant: "caption",
    icon: "facebook",
    href: "/facebook",
  },
  {
    fontVariant: "caption",
    icon: "youtube",
    href: "/youtube",
  },
  {
    fontVariant: "caption",
    icon: "twitter",
    href: "/twitter",
  },
] as const;
