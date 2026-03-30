import { menuData } from "./mobileNavbar/component/data";
import { NavbarWrapper } from "./navbar.style";
import NavList from "./mobileNavbar/component/navList";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavList />
    </NavbarWrapper>
  );
}
