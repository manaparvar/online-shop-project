import styled from "styled-components";
import NavLink from "@/app/components/Atoms/link/link";
import { sizes } from "@/styles/sizes";
import Icon from "@/app/components/molecules/icon/icon";

interface StyledIconProps {
  sizeMobile?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
}
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
`;
export const NavItem = styled.li`
  position: relative;
`;

export const DropdownWrapper = styled.ul`
  position: relative;
`;
export const NavbarWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs}px;
  justify-content: center;
  position: relative;
  @media (min-width: 1024px) {
    gap: ${sizes.xl}px;
  }
`;
export const MyNavLinks = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const StyledIcon = styled(Icon)<StyledIconProps>`
  align-self: center;
  height: ${({ sizeMobile = 8 }) => sizeMobile}px;
  width: ${({ sizeMobile = 8 }) => sizeMobile}px;
  @media (min-width: 768px) {
    width: ${({ sizeTablet = 8 }) => sizeTablet}px;
    height: ${({ sizeTablet = 8 }) => sizeTablet}px;
  }

  @media (min-width: 1024px) {
    width: ${({ sizeDesktop = 8 }) => sizeDesktop}px;
    height: ${({ sizeDesktop = 8 }) => sizeDesktop}px;
    margin-left: 5px;
  }
`;
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 100%;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  z-index: 10;
`;
