import { Search } from "lucide-react";

type iconProps = {
  icon: keyof typeof iconsNames;
};

export const searchIconData: iconProps[] = [
  {
    icon: "search",
  },
] as const;

export const iconsNames = {
  search: Search,
} as const;

export type IconItem = (typeof searchIconData)[number];
