"use client";

import { useState } from "react";
import NavLinks from "@/app/components/Atoms/link/link";
import SearchBar from "@/app/components/forms/searchBar/searchBar";
import Icon from "@/app/components/molecules/icon/icon";
import Navbar from "./navbar/navbar";

import {
  MenuWrapper,
  MyHamburgerButton,
  SearchBarWrapper,
  ContentWrapper,
  NavbarWrapper,
  TagText,
} from "./curtainMenu.style";

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
        <Navbar />
      </ContentWrapper>
    </MenuWrapper>
  );
}
