"use client";

import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import { theme } from "../../../../styles/theme";
import { navLinks } from "./component/navData";
import Icon from "../../molecules/icon/icon";
import WomenDropdown from "./component/dropdowns/women/womenDropdown";
import MenDropdown from "./component/dropdowns/men/menDropdown";
import KidsDropdown from "./component/dropdowns/kids/kidsDropdown";
import BrandsDropdown from "./component/dropdowns/brands/brandsDropdown";
import { useState } from "react";
import {
  Nav,
  NavbarWrapper,
  NavItem,
  MyNavLinks,
  SubMenu,
  DropdownWrapper,
} from "./component/navbar.style";
const dropdownMap: Record<string, React.FC> = {
  women: WomenDropdown,
  men: MenDropdown,
  kids: KidsDropdown,
  brands: BrandsDropdown,
};

const TagText = styled(Text)<{ $isPink: boolean }>`
  color: ${({ $isPink }) => ($isPink ? theme.colors.pink : theme.colors.black)};
`;
export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <Nav onMouseLeave={() => setActiveDropdown(null)}>
      <NavbarWrapper>
        {navLinks.map((item, index) => (
          <NavItem
            key={index}
            onMouseEnter={() =>
              item.dropdown && setActiveDropdown(item.dropdown)
            }
          >
            <MyNavLinks href={item.href}>
              <TagText
                $isPink={item.label === "Sale"}
                variant="h3"
                color="black"
              >
                {item.label}
              </TagText>
              {item.dropdown && <Icon icon="dropDown" color="mediumGrey" />}
            </MyNavLinks>
          </NavItem>
        ))}
      </NavbarWrapper>
      <SubMenu>
        {activeDropdown && (
          <DropdownWrapper>
            {(() => {
              const DropdownComponent = dropdownMap[activeDropdown];
              return DropdownComponent ? <DropdownComponent /> : null;
            })()}
          </DropdownWrapper>
        )}
      </SubMenu>
    </Nav>
  );
}
