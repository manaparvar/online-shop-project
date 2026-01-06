export type DropdownKey = "women" | "men" | "kids" | "brands";
export const navLinks: {
  href: string;
  label: string;
  dropdown?: DropdownKey;
}[] = [
  {
    href: "/women",
    label: "Women",
    dropdown: "women",
  },
  {
    href: "/men",
    label: "Men",
    dropdown: "men",
  },
  {
    href: "/kids",
    label: "Kids",
    dropdown: "kids",
  },
  {
    href: "/brands",
    label: "Brands",
    dropdown: "brands",
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
export const mobileNavLinks: { href: string; label: string }[] = [
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
  },
  {
    href: "/men",
    label: "Men",
  },
  {
    href: "/kids",
    label: "Kids",
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
export const womenData: { href: string; label: string }[] = [
  {
    href: "/women-shoes",
    label: "Shoes",
  },
  {
    href: "/women-dresses",
    label: "Dresses",
  },
  {
    href: "/women-accessories",
    label: "Accessories",
  },
  {
    href: "/women-eveningwear",
    label: "Evening Wear",
  },
  {
    href: "/women-pants&skirts",
    label: "Pants & Skirts",
  },
  {
    href: "/women-blouses&shirts",
    label: "Blouses & Shirts",
  },
  {
    href: "/women-sets&jumpsuits",
    label: "Sets & Jumpsuits",
  },
  {
    href: "/women-coats&outerwear",
    label: "Coats & Outerwear",
  },
] as const;
