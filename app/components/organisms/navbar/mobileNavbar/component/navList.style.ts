import styled from "styled-components";
import NavLink from "@/app/components/Atoms/link/link";
import { sizes } from "@/styles/sizes";

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.mediumGrey};
  display: none;
  @media (max-width: 1024px) {
    display: block;
    margin-bottom: 8px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 8px;
  @media (min-width: 1024px) {
    margin-left: 8px;
  }
`;
export const NavbarList = styled.ul`
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}px;
  height: fit-content;
  transition: 0.02s ease-in-out;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: ${sizes.xl}px;
  }
`;
