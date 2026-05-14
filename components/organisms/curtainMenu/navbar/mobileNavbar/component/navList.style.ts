import styled from "styled-components";

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs};
  height: fit-content;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.sizes.sm};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.sizes.xl};
  }
`;
