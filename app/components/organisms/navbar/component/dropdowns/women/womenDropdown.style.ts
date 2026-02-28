import styled from "styled-components";
import NavLink from "@/app/components/Atoms/link/link";
import { sizes } from "@/styles/sizes";

export const WomenDDWrapper = styled.ul`
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  left: 0;
  margin-top: 8px;
  padding: 16px;
  position: absolute;
  transition: ease-in-out 1;
  width: ${sizes["6xl"]}px;
  z-index: 3;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 8px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 8px;
  @media (min-width: 1024px) {
    margin-left: 16px;
  }
`;
