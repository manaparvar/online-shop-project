"use client";

import NavLinks from "@/app/components/Atoms/link/link";
import SearchBar from "@/app/components/forms/searchBar/searchBar";
import { mobileNavLinks } from "../../component/navData";
import Icon from "@/app/components/molecules/icon/icon";
import {
  MenuWrapper,
  SearchBarWrapper,
  IconWrapper,
  ContentWrapper,
  NavbarWrapper,
  NavLinkButton,
  TagText,
} from "./components/curtainMenu.style";

type props = {
  isOpen: boolean;
  // size: keyof typeof sizes;
  onToggle: () => void;
};

export default function CurtainMenu({ isOpen, onToggle }: props) {
  return (
    <MenuWrapper $isOpen={isOpen}>
      <IconWrapper onClick={onToggle}>
        <Icon
          icon="close"
          label="Close"
          color="mediumGrey"
          fontVariant="caption"
        />
      </IconWrapper>
      <ContentWrapper>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <NavbarWrapper>
          {mobileNavLinks.map((item, index) => (
            <NavLinks key={index} href={item.href}>
              <NavLinkButton>
                <TagText
                  color="black"
                  isPink={item.label === "Summer Sale"}
                  variant="caption"
                >
                  {item.label}
                </TagText>
              </NavLinkButton>
            </NavLinks>
          ))}
        </NavbarWrapper>
      </ContentWrapper>
    </MenuWrapper>
  );
}
