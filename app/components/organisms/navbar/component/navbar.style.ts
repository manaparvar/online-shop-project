import styled from "styled-components";
import NavLink from "@/app/components/Atoms/link/link";
import { sizes } from "@/styles/sizes";
import Icon from "@/app/components/molecules/icon/icon";

interface StyledIconProps {
  sizeMobile?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
}
export const NavItem = styled.li`
  position: relative;
`;
export const SubMenu = styled.div`
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  transition: ease-in-out 1;
  width: ${sizes["4xl"]}px;
  z-index: 10;
`;
export const DropdownWrapper = styled.ul``;
export const NavbarWrapper = styled.ul`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: row;
  gap: ${sizes.xs}px;
  @media (min-width: 1024px) {
    gap: ${sizes.xl}px;
  }
`;
export const MyNavLinks = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const StyledIcon = styled(Icon)<StyledIconProps>`
  align-self: center;
  width: ${({ sizeMobile = 16 }) => sizeMobile}px;
  height: ${({ sizeMobile = 16 }) => sizeMobile}px;

  @media (min-width: 768px) {
    width: ${({ sizeTablet = 16 }) => sizeTablet}px;
    height: ${({ sizeTablet = 16 }) => sizeTablet}px;
  }

  @media (min-width: 1024px) {
    width: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
    height: ${({ sizeDesktop = 16 }) => sizeDesktop}px;
    margin-left: 5px;
  }
`;
