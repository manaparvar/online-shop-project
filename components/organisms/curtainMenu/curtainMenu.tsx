"use client";

import { useState } from "react";
import SearchBar from "@/components/forms/searchBar/searchBar";
import Navbar from "./navbar/navbar";

import {
  MenuWrapper,
  MyHamburgerButton,
  SearchBarWrapper,
  ContentWrapper,
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
