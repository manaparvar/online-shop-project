"use client";

import { useState, useEffect } from "react";
import Logo from "../../molecules/logo/logo";
import SearchBar from "../../forms/searchBar/searchBar";
import CurtainMenu from "../curtainMenu/curtainMenu";
import Icon from "../../atoms/icon/icon";
import { icons } from "../../atoms/icon/component/iconData";
import Navbar from "../curtainMenu/navbar/navbar";
import Avatar from "../../molecules/avatar/avatar";
import {
  HeaderWrapper,
  HeaderUpperLine,
  MyHamburgerButton,
  MobileMenuWrapper,
  SearchBarWrapper,
  UserActionsWrapper,
  IconWrapper,
  HeaderDownerPart,
  StyledContainer,
  StyledDividerLine,
} from "./components/header.style";

type User = {
  name: string;
  image: string;
};

export default function DesktopHeader({ user }: { user?: User }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const filteredIcons = icons.filter(
    (item) => item.icon === "shoppingBag" || item.icon === "heart",
  );

  return (
    <StyledContainer $scrolled={scrolled}>
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
          <UserActionsWrapper>
            <IconWrapper>
              {filteredIcons.map((item, index) => (
                <Icon key={index} icon={item.icon} label={item.label} />
              ))}
            </IconWrapper>
            <Avatar user={user} />
          </UserActionsWrapper>
        </HeaderUpperLine>
        <HeaderDownerPart>
          <Navbar />
        </HeaderDownerPart>
      </HeaderWrapper>
      <StyledDividerLine
        lineType="headerDivider"
        color="primary"
        $scrolled={true}
      />
    </StyledContainer>
  );
}
