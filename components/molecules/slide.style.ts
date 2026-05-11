import Column from "../atoms/grid/column";
import styled from "styled-components";
import Row from "../atoms/grid/row";
import Image from "../atoms/image/image";
import Button from "../atoms/button/button";

export const SlideWrapper = styled(Row)`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: end;
  justify-content: flex-end;
`;

export const InnerRow = styled(Row)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const StyledColumn = styled(Column)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.sizes.xs};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${({ theme }) => theme.sizes.sm};
  }
`;
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.xs};
`;

export const StyledImage = styled(Image)`
  height: 70%;
  width: auto;
  margin-right: 5%;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 70%;
    width: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70%;
    width: auto;
    margin-right: 5%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 90%;
    width: auto;
    margin-right: 10%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 6px;
  padding: ${({ theme }) => theme.SPACING(2.5)};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.SPACING(2.5, 3)};
  }

  /* LG Large devices */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.SPACING(2.5, 4)};
  }

  /* XL Extra large devices */
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ theme }) => theme.SPACING(3, 6)};
  }
`;
