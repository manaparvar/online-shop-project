import styled from "styled-components";
import NavLink from "@/app/components/Atoms/link/link";
import { sizes } from "@/styles/sizes";

export const WomenDDWrapper = styled.ul`
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: 0;
  padding: 16px;
  position: absolute;
  transition: ease-in-out 1;
  width: ${sizes["6xl"]}px;
  height: fit-content;
  z-index: 3;
  margin-top: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 8px;
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 16px;
`;
