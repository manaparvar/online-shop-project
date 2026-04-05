import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Text } from "@/components/atoms/text/text";
import { sizes } from "@/styles/sizes";
import HamburgerButton from "./navbar/mobileNavbar/hamburgerButton/hamburgerButton";

export const MenuWrapper = styled.div<{
  $isOpen: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.149);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: ${sizes.xs} ${sizes.md};
  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${sizes.sm} ${sizes.md};
  }
  @media (min-width: 500px) {
    padding: ${sizes.sm} ${sizes.xlg};
  }
  @media (min-width: 700px) {
    padding: ${sizes.sm} 56px;
  }
  position: fixed;
  top: 0;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-110%)"};
  width: clamp(200px, 60vw, 800px);
  z-index: 20;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm};
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: ${sizes.md};
  }
  margin: 0 auto;
  width: 100%;
`;
export const MyHamburgerButton = styled(HamburgerButton)`
  z-index: 20;
`;
export const SearchBarWrapper = styled.div`
  box-sizing: border-box;
  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
  width: 100%;
`;
export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
  @media (min-width: ${theme.breakpoints.sm}) {
    margin-top: ${sizes.lg};
  }
`;

export const TagText = styled(Text)<{ $isPink: boolean }>`
  color: ${({ $isPink }) => ($isPink ? theme.colors.pink : theme.colors.black)};
`;
