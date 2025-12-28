"use client";

import NavLinks from "@/app/components/Atoms/link";
import SearchBar from "@/app/components/forms/searchBar/components/searchBar";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Text } from "@/app/components/Atoms/text/text";
import { mobileNavLinks } from "../navData";
import Icon from "@/app/components/headerComponents/icon";
import { sizes } from "@/styles/sizes";
import NavLink from "@/app/components/Atoms/link";
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
const MenuWrapper = styled.div<{
  $isOpen: boolean;
}>`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-110%)"};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.149);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease;
  width: clamp(200px, 50vw, 400px);
  z-index: 10;
`;
// const InnerWrapper = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: column;
//   align-self: center;
// `;
const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SearchBarWrapper = styled.div`
  width: 100%;
`;
const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}px;
  margin-top: ${sizes.sm}px;
  @media (min-width: 376px) {
    margin-top: ${sizes.md}px;
  }
`;

const NavLinkButton = styled.div`
  width: 100%;
  text-align: left;
`;
const TagText = styled(Text)<{ isPink: boolean }>`
  color: ${({ isPink }) => (isPink ? theme.colors.pink : theme.colors.black)};
`;
const IconWrapper = styled.div`
  width: 32px;
  align-self: flex-end;
  margin: 16px;
`;
