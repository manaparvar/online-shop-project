import styled from "styled-components";
import { theme } from "@/styles/theme";
import { sizes } from "@/styles/sizes";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm};
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-top: ${sizes.lg};
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    padding-top: ${sizes.xs};
  }
`;
