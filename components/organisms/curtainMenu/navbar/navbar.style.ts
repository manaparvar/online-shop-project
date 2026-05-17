import styled from "styled-components";
import { theme } from "@/styles/theme";
import { sizes } from "@/styles/sizes";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: ${({ theme }) => theme.sizes.lg};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    padding-top: ${({ theme }) => theme.sizes.xs};
  }
`;
