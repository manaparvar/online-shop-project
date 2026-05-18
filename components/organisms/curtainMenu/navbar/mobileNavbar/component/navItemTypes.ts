export type NavSubItem = {
  label: string;
  href?: string;
};

export type NavItem = {
  label: string;
  to?: string;
  items?: NavSubItem[];
};
