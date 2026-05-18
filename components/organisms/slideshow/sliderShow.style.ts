import styled, { css } from "styled-components";
import Button from "../../atoms/button/button";
import Dots from "../cardCarousel/components/dots";

export const MainWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.sizes.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 160px;
  }
`;

export const SliderWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.warning};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 440px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 560px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 600px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: 696px;
  }
`;
export const Controller = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const PrevButton = styled(Button)`
  height: ${({ theme }) => theme.sizes.xl};
  border-radius: 2px;
  opacity: 0.5;
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
  opacity: 0.5;
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
export const DotsWrapper = styled(Dots)`
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-around;
  z-index: 20;
`;
