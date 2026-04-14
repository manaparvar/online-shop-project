import NextImage from "next/image";
import styled from "styled-components";

export const AnimatedImage = styled(NextImage)<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.35s ease;
`;
