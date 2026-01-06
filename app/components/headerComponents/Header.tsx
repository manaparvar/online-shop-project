"use client";

import { useState } from "react";
import styled from "styled-components";
import Logo from "../molecules/logo/logo";
import SearchBar from "../forms/searchBar/searchBar";
import CurtainMenu from "../organisms/navbar/mobileNavbar/curtainMenu/curtainMenu";
import Profile from "../molecules/profile/profile";
import Navbar from "../organisms/navbar/navbar";
import Icon from "../molecules/icon/icon";
import { icons } from "../molecules/icon/component/iconData";
import DividerLine from "../Atoms/divider";
import HamburgerButton from "../organisms/navbar/mobileNavbar/hamburgerButton/hamburgerButton";

export default function DesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const filteredIcons = icons.filter(
    (item) => item.icon === "shoppingBag" || item.icon === "heart"
  );

  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <MobileMenuWrapper>
          <HamburgerButton size="lg" isOpen={isOpen} onToggle={openMenu} />
          <CurtainMenu isOpen={isOpen} onToggle={closeMenu} />
        </MobileMenuWrapper>
        <Logo />
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <RightSideWrapper>
          <IconWrapper>
            {filteredIcons.map((item, index) => (
              <Icon
                key={index}
                icon={item.icon}
                color="mediumGrey"
                label={item.label}
                fontVariant="caption"
              />
            ))}
          </IconWrapper>

          <Profile />
        </RightSideWrapper>
      </HeaderUpperLine>
      <HeaderDownerPart>
        <Navbar />
      </HeaderDownerPart>
      <DividerWrapper>
        <DividerLine color="brightGrey" lineType="headerDivider" />
      </DividerWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(16px, 6vw, 80px);
`;
const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
  @media (min-width: 376px) {
    height: 72px;
  }
  @media (min-width: 1024px) {
    height: 96px;
  }
`;
const MobileMenuWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
const SearchBarWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 3;
    max-width: 600px;
    margin: 0 24px;
    justify-content: center;
  }
`;
const RightSideWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (min-width: 376px) {
    gap: 16px;
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
  justify-content: center;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 8px;

  @media (min-width: 376px) {
    gap: 16px;
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

const HeaderDownerPart = styled.div`
  display: none;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 40px;
  }
`;
const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
