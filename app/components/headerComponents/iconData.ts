import {
  Heart,
  ShoppingCart,
  ShoppingBag,
  User,
  Search,
  X,
} from "lucide-react";
import { textVariants } from "../Atoms/text/variants";

type iconProps = {
  fontVariant?: keyof typeof textVariants;
  icon: keyof typeof iconsNames;
  label: string;
};

export const iconData: iconProps[] = [
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
] as const;

export const iconsNames = {
  heart: Heart,
  cart: ShoppingCart,
  shoppingBag: ShoppingBag,
  close: X,
} as const;

export type IconItem = (typeof iconData)[number];
