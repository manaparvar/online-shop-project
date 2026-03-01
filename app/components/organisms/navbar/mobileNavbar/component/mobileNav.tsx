import { menuData } from "./data";
import { NavbarWrapper } from "./mobileNav.style";
import NavList from "./navList";

export default function MobileNavbar() {
  return (
    <NavbarWrapper>
      <NavList />
    </NavbarWrapper>
  );
}
