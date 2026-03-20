import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import { theme } from "@/styles/theme";

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
  height: fit-content;
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${sizes.sm};
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: ${sizes.xl};
  }
`;
