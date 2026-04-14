import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { textVariants } from "@/styles/variants";

export const FooterWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brightBlue};
  padding: ${sizes.sm};
  gap: ${sizes.lg};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${sizes.xl} ${sizes.lg};
  }
  @media (min-width: 600px) {
    padding: ${sizes.xl} ${sizes.xl};
  }
  @media (min-width: 700px) {
    flex-direction: column;
    padding: ${sizes.xl} ${sizes.xl};
    gap: ${sizes["2xl"]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${sizes["2.5xl"]} ${sizes["4.5xl"]};
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
