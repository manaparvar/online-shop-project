"use client";

import { menuData } from "./data";

import NavItem from "./navItem";
import { NavbarList } from "./navList.style";

export default function NavList() {
  return (
    <NavbarList>
      {menuData.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </NavbarList>
  );
}
