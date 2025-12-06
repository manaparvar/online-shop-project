import { Heart, ShoppingCart, ShoppingBag, User, Search } from "lucide-react";
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
    label: "Favorite",
  },
] as const;

export const iconsNames = {
  heart: Heart,
  cart: ShoppingCart,
  shoppingBag: ShoppingBag,
} as const;

export type IconItem = (typeof iconData)[number];
