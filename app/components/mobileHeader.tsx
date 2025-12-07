"use client";
import styled from "styled-components";
import HamburgerNavbar from "./organisms/navbar/hamburgerNavbar/hamburgerNavbar";
import Icon from "./headerComponents/icon";
import { iconData } from "./headerComponents/iconData";
import Profile from "./molecules/profile";
import { Text } from "./Atoms/text/text";

export default function MobileHeader() {
  return (
    <HeaderWrapper>
      <HamburgerNavbar />
      <RightSideWrapper>
        {iconData.map((item, index) => (
          <Icon
            key={index}
            item={item}
            size="md"
            color="black"
            className="mobile-icon"
            fontVariant="button"
          />
        ))}
        <Profile size="xlg" />
      </RightSideWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
  padding: 0 80px;
  .mobile-icon ${Text} {
    display: none;
  }
  @media (min-width: 376px) {
    .mobile-icon ${Text} {
      display: inline;
    }
  }
`;
const RightSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;
