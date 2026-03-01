export type DropdownKey = "Women" | "Men" | "Kids" | "Brands";
export const navLinks: {
  href: string;
  label: string;
  dropdown?: DropdownKey;
}[] = [
  {
    href: "/women",
    label: "Women",
    dropdown: "Women",
  },
  {
    href: "/men",
    label: "Men",
    dropdown: "Men",
  },
  {
    href: "/kids",
    label: "Kids",
    dropdown: "Kids",
  },
  {
    href: "/brands",
    label: "Brands",
    dropdown: "Brands",
  },
  {
    href: "/new",
    label: "New",
  },
  {
    href: "/sale",
    label: "Sale",
  },
] as const;
export const mobileNavLinks: {
  href: string;
  label: string;
  dropdown?: DropdownKey;
}[] = [
  {
    href: "/summerSale",
    label: "Summer Sale",
  },
  {
    href: "/home",
    label: "Home",
  },
  {
    href: "/women",
    label: "Women",
    dropdown: "Women",
  },
  {
    href: "/men",
    label: "Men",
    dropdown: "Men",
  },
  {
    href: "/kids",
    label: "Kids",
    dropdown: "Kids",
  },
  {
    href: "/brands",
    label: "Brands",
    dropdown: "Brands",
  },
  {
    href: "/aboutus",
    label: "About us",
  },
  {
    href: "/contact",
    label: "Contact us",
  },
] as const;
