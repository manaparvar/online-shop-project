"use client";

import { useState } from "react";
import NavLinks from "@/app/components/Atoms/link/link";
import SearchBar from "@/app/components/forms/searchBar/searchBar";
import Icon from "@/app/components/molecules/icon/icon";
import MobileNavbar from "../component/mobileNav";

import {
  MenuWrapper,
  MyHamburgerButton,
  SearchBarWrapper,
  ContentWrapper,
  NavbarWrapper,
  TagText,
} from "./components/curtainMenu.style";

type props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function CurtainMenu({ isOpen, onToggle }: props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        <MobileNavbar />
        {/* {mobileNavLinks.map((item) => (
            <div key={item.label}>
              <NavLinks
                href={item.href}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  )
                }
              >
                <TagText
                  color="black"
                  $isPink={item.label === "Summer Sale"}
                  variant="caption"
                >
                  {item.label}
                </TagText>
                {item.dropdown && <Icon icon="dropDown" color="mediumGrey" />}
                {mobileSubmenus.map((item) => (
                  <DropDowns href={item.href}></DropDowns>
                ))}
                <WomenDropdown />
              </NavLinks>
            </div>
          ))} */}
      </ContentWrapper>
    </MenuWrapper>
  );
}
