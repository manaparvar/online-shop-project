import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const ProfileWrapper = styled.div`
  width: ${sizes.md};
  height: ${sizes.md};
  @media (min-width: 376px) {
    width: ${sizes.lg};
    height: ${sizes.lg};
  }
  @media (min-width: 1024px) {
    width: ${sizes.xlg};
    height: ${sizes.xlg};
  }
  align-self: flex-start;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
