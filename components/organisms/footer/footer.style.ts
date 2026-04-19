import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.brightBlue};
  gap: ${sizes.lg};

  @media (min-width: 700px) {
    flex-direction: column;

    gap: ${sizes["2xl"]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: ${sizes["2xl"]};
  }
`;
export const FooterFeatures = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${sizes.lg};

  @media (min-width: 700px) {
    flex-direction: row;
    gap: ${sizes["2.5xl"]};
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
`;
