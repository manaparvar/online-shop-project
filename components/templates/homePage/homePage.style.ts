import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.sm};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
