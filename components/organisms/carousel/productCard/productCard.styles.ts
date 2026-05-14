import styled from "styled-components";
import { DotProps, ItemProps } from "./product.type";

export const CardControllerWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Track = styled.ul<{ $gap: string }>`
  display: flex;
  gap: ${({ $gap }) => $gap};
  list-style: none;
  margin: 0;
  padding: 0;
  scroll-snap-type: x mandatory;
`;

export const Item = styled.li<ItemProps>`
  flex: 0 0 ${({ $mobileBasis }) => $mobileBasis};
  scroll-snap-align: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: ${({ $tabletBasis }) => $tabletBasis};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: ${({ $desktopBasis }) => $desktopBasis};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: ${({ $wideDesktopBasis }) => $wideDesktopBasis};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-basis: ${({ $extraWideDesktopBasis }) => $extraWideDesktopBasis};
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Dot = styled.button<DotProps>`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s ease;
  background: ${({ $active }) => ($active ? "#111" : "rgba(0,0,0,0.2)")};
`;
