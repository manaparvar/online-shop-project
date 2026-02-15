import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import HamburgerButton from "@/app/components/organisms/navbar/mobileNavbar/hamburgerButton/hamburgerButton";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 clamp(16px, 6vw, 80px);
  position: fixed;
  width: 100%;
`;
export const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  @media (min-width: 376px) {
    height: ${sizes["2.5xl"]}px;
  }
  @media (min-width: 1024px) {
    height: ${sizes["3xl"]}px;
  }
  justify-content: space-between;
`;
export const MyHamburgerButton = styled(HamburgerButton)`
  z-index: 20;
`;
export const MobileMenuWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const SearchBarWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 3;
    justify-content: center;
    margin: 0 24px;
    max-width: 600px;
  }
`;
export const RightSideWrapper = styled.div`
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
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (min-width: 376px) {
    gap: 16px;
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
  justify-content: left;
`;

export const HeaderDownerPart = styled.div`
  display: none;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 40px;
  }
`;
export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
