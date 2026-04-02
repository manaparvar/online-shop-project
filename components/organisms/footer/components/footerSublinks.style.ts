import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import NavLink from "@/components/atoms/link/link";

export const LinksWrapper = styled.ul`
  margin-top: ${sizes.xl};
  display: grid;
  @media (min-width: 700px) {
    flex-direction: row;
    gap: ${sizes.md};
  }
`;
export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.3;
  }
`;
