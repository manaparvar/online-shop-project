import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const ProfileWrapper = styled.div`
  width: ${sizes.md}px;
  height: ${sizes.md}px;
  @media (min-width: 376px) {
    width: ${sizes.lg}px;
    height: ${sizes.lg}px;
  }
  @media (min-width: 1024px) {
    width: ${sizes.xlg}px;
    height: ${sizes.xlg}px;
  }
  align-self: flex-start;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
