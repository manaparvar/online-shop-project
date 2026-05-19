import styled from "styled-components";

export const LinksWrapper = styled.ul`
  margin-top: ${({ theme }) => theme.sizes.lg};
  display: grid;
  gap: ${({ theme }) => theme.sizes.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.sizes.md};
  }
`;
