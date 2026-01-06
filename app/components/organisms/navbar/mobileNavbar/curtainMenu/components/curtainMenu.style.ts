import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Text } from "@/app/components/Atoms/text/text";
import { sizes } from "@/styles/sizes";
import Icon from "@/app/components/molecules/icon/icon";

interface StyledIconProps {
  sizeMobile?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
}

export const MenuWrapper = styled.div<{
  $isOpen: boolean;
}>`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-110%)"};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.149);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease;
  width: clamp(200px, 50vw, 400px);
  z-index: 10;
`;
// const InnerWrapper = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: column;
//   align-self: center;
// `;
export const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}px;
  margin-top: ${sizes.sm}px;
  @media (min-width: 376px) {
    margin-top: ${sizes.md}px;
  }
`;

export const NavLinkButton = styled.div`
  width: 100%;
  text-align: left;
`;
export const TagText = styled(Text)<{ $isPink: boolean }>`
  color: ${({ $isPink }) => ($isPink ? theme.colors.pink : theme.colors.black)};
`;
export const StyledIcon = styled(Icon)<StyledIconProps>`
  width: ${({ sizeMobile = 16 }) => sizeMobile}px;
  height: ${({ sizeMobile = 16 }) => sizeMobile}px;

  @media (min-width: 768px) {
    width: ${({ sizeTablet = 16 }) => sizeTablet}px;
    height: ${({ sizeTablet = 16 }) => sizeTablet}px;
  }

  @media (min-width: 1024px) {
    width: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
    height: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
  }
`;
export const IconWrapper = styled.div`
  width: 32px;
  align-self: flex-end;
  margin: 16px;
`;
