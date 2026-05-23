import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import HamburgerButton from "@/components/organisms/curtainMenu/navbar/mobileNavbar/hamburgerButton/hamburgerButton";
import Container from "@/components/atoms/grid/container";
import DividerLine from "@/components/atoms/divider/index";

export const StyledContainer = styled(Container)<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0px 13px 13px -15px rgba(0,0,0,0.85)" : "none"};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  z-index: 100;
  min-height: ${({ theme }) => theme.sizes["2xlg"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 176px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-height: 176px;
  }
`;
export const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.sizes["2.5xl"]};
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.sizes["2.5xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.sizes["4xl"]};
  }
`;

export const MyHamburgerButton = styled(HamburgerButton)`
  z-index: 20;
`;

export const MobileMenuWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const SearchBarWrapper = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex: 3;
    justify-content: center;
    margin: 0 ${({ theme }) => theme.sizes.lg};
    max-width: 600px;
  }
`;
export const UserActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.xs};
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.sizes.sm};
  }
  justify-content: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.xs};
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.sizes.sm};
  }

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

export const HeaderDownerPart = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: ${({ theme }) => theme.sizes.lg};
  }
`;
export const StyledDividerLine = styled(DividerLine)<{ $scrolled: boolean }>`
  display: ${({ $scrolled }) => ($scrolled ? "none" : "block")};
`;
