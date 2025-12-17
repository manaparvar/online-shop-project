import { X } from "lucide-react";
import { textVariants } from "@/app/components/Atoms/text/variants";

type iconProps = {
  fontVariant?: keyof typeof textVariants;
  icon: keyof typeof iconsNames;
  label: string;
};

export const closeIconData: iconProps[] = [
  {
    fontVariant: "caption",
    icon: "close",
    label: "Close",
  },
] as const;

export const iconsNames = {
  close: X,
} as const;

export type IconItem = (typeof closeIconData)[number];
