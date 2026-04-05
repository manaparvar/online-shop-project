import styled from "styled-components";
import { theme } from "@/styles/theme";

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  @media (min-width: ${theme.breakpoints.sm}) {
    bottom: -10px;
  }
`;

export const Price = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const OldPrice = styled.span`
  font-size: 12px;
  color: #888;
  text-decoration: line-through;
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 24px;
  }
`;
