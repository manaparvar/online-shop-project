import styled from "styled-components";
import { theme } from "@/styles/theme";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBackG};
  gap: ${({ theme }) => theme.sizes.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    gap: ${({ theme }) => theme.sizes["2xl"]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.sizes["2xl"]};
  }
`;
export const FooterFeatures = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.sizes["2.5xl"]};
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
`;
