import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import HamburgerButton from "@/app/components/organisms/navbar/mobileNavbar/hamburgerButton/hamburgerButton";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(16px, 6vw, 80px);
`;
export const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
  @media (min-width: 376px) {
    height: ${sizes["2.5xl"]}px;
  }
  @media (min-width: 1024px) {
    height: ${sizes["3xl"]}px;
  }
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
    max-width: 600px;
    margin: 0 24px;
    justify-content: center;
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
  justify-content: left;
  gap: 8px;

  @media (min-width: 376px) {
    gap: 16px;
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
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
