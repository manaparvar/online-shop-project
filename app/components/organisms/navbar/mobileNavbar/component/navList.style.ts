import styled from "styled-components";
import { sizes } from "@/styles/sizes";

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
