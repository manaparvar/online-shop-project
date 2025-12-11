"use client";
import styled from "styled-components";
import HamburgerNavbar from "./organisms/navbar/hamburgerNavbar/hamburgerNavbar";
import Icon from "./headerComponents/icon";
import { iconData } from "./headerComponents/iconData";
import Profile from "./molecules/profile";
import Logo from "./molecules/logo";
import DividerLine from "./Atoms/divider/index";

export default function MobileHeader() {
  return (
    <>
      <HeaderWrapper>
        <MyHamburgerNavbar />
        <MobileLogo size="lg" />
        <RightSideWrapper>
          {iconData.map((item, index) => (
            <Icon
              key={index}
              item={item}
              size="sm"
              color="black"
              className="mobile-icon"
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
const MyHamburgerNavbar = styled(HamburgerNavbar)``;
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
