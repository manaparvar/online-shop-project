"use client";

import { useState } from "react";
import Logo from "../../molecules/logo/logo";
import SearchBar from "../../forms/searchBar/searchBar";
import CurtainMenu from "../curtainMenu/curtainMenu";
import Profile from "../../molecules/avatar/avatar";
import Icon from "../../molecules/icon/icon";
import { icons } from "../../molecules/icon/component/iconData";
import Navbar from "../curtainMenu/navbar/navbar";
import DividerLine from "../../atoms/divider";
import {
  HeaderWrapper,
  HeaderUpperLine,
  MyHamburgerButton,
  MobileMenuWrapper,
  SearchBarWrapper,
  RightSideWrapper,
  IconWrapper,
  HeaderDownerPart,
  DividerWrapper,
} from "./components/header.style";

export default function DesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const filteredIcons = icons.filter(
    (item) => item.icon === "shoppingBag" || item.icon === "heart",
  );

  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <MobileMenuWrapper>
          <MyHamburgerButton isOpen={isOpen} onToggle={openMenu} />
          <CurtainMenu isOpen={isOpen} onToggle={closeMenu} />
        </MobileMenuWrapper>
        <Logo />
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <RightSideWrapper>
          <IconWrapper>
            {filteredIcons.map((item, index) => (
              <Icon key={index} icon={item.icon} label={item.label} />
            ))}
          </IconWrapper>

          <Profile alt="User Profile" src="/profile.jpg" />
        </RightSideWrapper>
      </HeaderUpperLine>
      <HeaderDownerPart>
        <Navbar />
      </HeaderDownerPart>
      <DividerWrapper>
        <DividerLine lineType="headerDivider" />
      </DividerWrapper>
    </HeaderWrapper>
  );
}
