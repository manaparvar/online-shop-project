import { sizes } from "@/styles/sizes";
import styled from "styled-components";

export const LinksWrapper = styled.ul`
  margin-top: ${sizes.xl};
  display: grid;
  @media (min-width: 700px) {
    flex-direction: row;
    gap: ${sizes.md};
  }
`;
