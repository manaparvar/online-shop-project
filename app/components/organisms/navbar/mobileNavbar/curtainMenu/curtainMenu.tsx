"use client";

import { useState } from "react";
import NavLinks from "@/app/components/Atoms/link/link";
import SearchBar from "@/app/components/forms/searchBar/searchBar";
import { mobileNavLinks } from "../../component/navData";
import Icon from "@/app/components/molecules/icon/icon";
import WomenDropdown from "./../../component/dropdowns/women/womenDropdown";
import MenDropdown from "./../../component/dropdowns/men/menDropdown";
import KidsDropdown from "./../../component/dropdowns/kids/kidsDropdown";
import BrandsDropdown from "./../../component/dropdowns/brands/brandsDropdown";

import {
  MenuWrapper,
  MyHamburgerButton,
  SearchBarWrapper,
  ContentWrapper,
  NavbarWrapper,
  TagText,
  Submenu,
  DropdownWrapper,
} from "./components/curtainMenu.style";

const dropdownMap: Record<string, React.FC> = {
  women: WomenDropdown,
  men: MenDropdown,
  kids: KidsDropdown,
  brands: BrandsDropdown,
};

type props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function CurtainMenu({ isOpen, onToggle }: props) {
  // const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const openMenu = () => {
  //   if (openDropdown === false) {
  //     setOpenDropdown(!openDropdown);
  //     setActiveDropdown(item.dropdown);
  //   } else setOpenDropdown(false);
  // };
  return (
    <MenuWrapper $isOpen={isOpen}>
      <ContentWrapper>
        <MyHamburgerButton
          size="lg"
          isOpen={isOpen}
          onToggle={onToggle}
        ></MyHamburgerButton>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <NavbarWrapper>
          {mobileNavLinks.map((item, index) => (
            <NavLinks
              key={index}
              href={item.href}
              // onClick={item.dropdown && () => {
              //     !openDropdown &&
              //      setActiveDropdown(item.dropdown);
              //      setOpenDropdown(!openDropdown);

              // };}
            >
              <TagText
                color="black"
                $isPink={item.label === "Summer Sale"}
                variant="caption"
              >
                {item.label}
              </TagText>
              {item.dropdown && <Icon icon="dropDown" color="mediumGrey" />}
            </NavLinks>
          ))}
          {/* <Submenu>
            {!openDropdown && (
              <DropdownWrapper>
                {(() => {
                  const DropdownComponent = dropdownMap[!openDropdown];
                  return DropdownComponent ? <DropdownComponent /> : null;
                })()}
              </DropdownWrapper>
            )}
          </Submenu> */}
        </NavbarWrapper>
      </ContentWrapper>
    </MenuWrapper>
  );
}
