"use client";
import styled from "styled-components";
import MyHamburgerButton from "./organisms/navbar/mobileNavbar/hamburgerButton";
import Icon from "./headerComponents/icon";
import { icons } from "./headerComponents/iconData";
import Profile from "./molecules/profile";
import Logo from "./molecules/logo";
import DividerLine from "./Atoms/divider/index";
import CurtainMenu from "./organisms/navbar/mobileNavbar/mobileNavbar";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const filteredIcons = icons.filter(
    (item) => item.icon === "shoppingBag" || item.icon === "heart"
  );

  return (
    <>
      <HeaderWrapper>
        <MyHamburgerButton size="lg" isOpen={isOpen} onToggle={openMenu} />
        <CurtainMenu isOpen={isOpen} onToggle={closeMenu} />
        <MobileLogo size="lg" />
        <RightSideWrapper>
          {filteredIcons.map((item, index) => (
            <Icon
              key={index}
              size="sm"
              color="black"
              label={item.label}
              icon={item.icon}
              fontVariant={item.fontVariant}
            />
          ))}
          <Profile size="xlg" />
        </RightSideWrapper>
      </HeaderWrapper>
      <DividerWrapper>
        <DividerLine color="brightGrey" lineType="headerDivider" />
      </DividerWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
  top: 16px;
`;

const MobileLogo = styled(Logo)`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;
const RightSideWrapper = styled.div`
  display: flex;
  gap: 16px;

  .mobile-icon p {
    display: none;
  }
  @media (min-width: 376px) {
    .mobile-icon p {
      display: block;
    }
  }
`;
const DividerWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 16px;
`;
