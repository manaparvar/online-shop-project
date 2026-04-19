import styled from "styled-components";
import { theme } from "@/styles/theme";

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  left: 10px;

  @media (min-width: ${theme.breakpoints.sm}) {
    bottom: -20px;
  }
`;
