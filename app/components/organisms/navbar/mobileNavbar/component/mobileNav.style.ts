import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm}px;
  @media (min-width: 376px) {
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
