import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}px;
  @media (min-width: 376px) {
    margin-top: ${sizes.lg}px;
  }
`;
