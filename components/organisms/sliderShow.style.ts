import styled, { css } from "styled-components";
import Row from "../atoms/grid/row";

export const ContentWrapper = styled(Row)`
  display: "flex";
  overflow-x: auto;
  scroll-snap-type: "x mandatory";
  width: 100%;
`;

export const SliderWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;

    @media (min-width: 376px) {
      height: 560px;
    }

    @media (min-width: 768px) {
      height: 560px;
    }

    @media (min-width: 1290px) {
      height: 600px;
    }
    @media (min-width: 1440px) {
      height: 776px;
    }
  `}
`;
