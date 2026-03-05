import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs}px;
  height: fit-content;
  width: 100%;
  @media (min-width: 376px) {
    gap: ${sizes.sm}px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: ${sizes.xl}px;
  }
`;
