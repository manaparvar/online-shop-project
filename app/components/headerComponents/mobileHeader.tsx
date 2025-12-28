"use client";
import styled from "styled-components";
import MyHamburgerButton from "./organisms/navbar/mobileNavbar/hamburgerButton/hamburgerButton";
import Icon from "./molecules/icon/icon";
import { icons } from "./molecules/icon/component/iconData";
import Profile from "./molecules/profile/profile";
import Logo from "./molecules/logo/logo";
import DividerLine from "./Atoms/divider/index";
import CurtainMenu from "./organisms/navbar/mobileNavbar/curtainMenu/curtainMenu";
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
    <Wrapper>
      <HeaderWrapper>
        <MyHamburgerButton size="lg" isOpen={isOpen} onToggle={openMenu} />
        <CurtainMenu isOpen={isOpen} onToggle={closeMenu} />
        <MobileLogo />
        <RightSideWrapper>
          {filteredIcons.map((item, index) => (
            <Icon
              key={index}
              color="black"
              label={item.label}
              icon={item.icon}
              fontVariant="caption"
              className="mobile-icon"
            />
          ))}
          <Profile />
        </RightSideWrapper>
      </HeaderWrapper>
      <DividerWrapper>
        <DividerLine color="brightGrey" lineType="headerDivider" />
      </DividerWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0 clamp(16px, 6vw, 80px);
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 56px;
  @media (min-width: 376px) {
    height: 72px;
  }
  justify-content: space-between;
  position: relative;
  margin: 8px 0;
  top: 16px;
`;

const MobileLogo = styled(Logo)`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;
const RightSideWrapper = styled.div`
  display: flex;
  gap: 8px;
  @media (min-width: 376px) {
    gap: 16px;
  }

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
  justify-content: center;
  display: flex;
`;
