import styled, { css } from "styled-components";
import Button from "../atoms/button/button";
export const MainWrapper = styled.div`
  position: relative;
`;

export const Controller = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 400px;
    background-color: ${theme.colors.yellow};

    @media (min-width: ${theme.breakpoints.sm}) {
      height: 440px;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      height: 560px;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      height: 600px;
    }
    @media (min-width: ${theme.breakpoints.xl}) {
      height: 696px;
    }
  `}
`;

export const PrevButton = styled(Button)`
  height: ${({ theme }) => theme.sizes.xl};
  border-radius: 2px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.sizes.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes["2xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.sizes["2.5xl"]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: ${({ theme }) => theme.sizes["3xl"]};
  }
`;
export const NextButton = styled(Button)`
  height: ${({ theme }) => theme.sizes.xl};
  border-radius: 2px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.sizes.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes["2xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.sizes["2.5xl"]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: ${({ theme }) => theme.sizes["3xl"]};
  }
`;
