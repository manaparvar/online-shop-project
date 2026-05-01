import styled from "styled-components";
import { theme } from "@/styles/theme";
import { sizes } from "@/styles/sizes";
import HamburgerButton from "@/components/organisms/curtainMenu/navbar/mobileNavbar/hamburgerButton/hamburgerButton";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`;
export const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  @media (min-width: ${theme.breakpoints.sm}) {
    height: ${sizes["2.5xl"]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${sizes["3xl"]};
  }
  justify-content: space-between;
`;
export const MyHamburgerButton = styled(HamburgerButton)`
  z-index: 20;
`;
export const MobileMenuWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;
export const SearchBarWrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
    flex: 3;
    justify-content: center;
    margin: 0 ${sizes.md};
    max-width: 600px;
  }
`;
export const RightSideWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs};
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: ${sizes.sm};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: ${sizes.md};
  }
  justify-content: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs};
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: 16px;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: 24px;
  }
`;

export const HeaderDownerPart = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: ${sizes.xlg};
  }
`;
export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
