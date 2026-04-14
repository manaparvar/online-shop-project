import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import { theme } from "@/styles/theme";
import { textVariants } from "@/styles/variants";

export const SearchWrapper = styled.div`
  height: ${sizes.md};
  width: 100%;
  /* width: clamp(264px, 84vw, 312px); */
  @media (min-width: ${theme.breakpoints.sm}) {
    height: ${sizes.lg};
    width: 80%;
    position: absolute;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${sizes.xlg};
    width: 304px;
    position: static;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SearchInput = styled.input`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: ${sizes.lg};
    width: ${sizes["2xlg"]};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${sizes.xlg};
    width: ${sizes["2xlg"]};
  }
  &::placeholder {
    font-size: ${textVariants.caption.fontSize.mobile};
    @media (min-width: ${theme.breakpoints.sm}) {
      font-size: ${textVariants.caption.fontSize.tablet};
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: ${textVariants.caption.fontSize.desktop};
    }
    color: ${({ theme }) => theme.colors.grey[300]};
  }
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border-radius: 0 5px 5px 0;
  border: none;
  flex: 1;
  padding-left: ${sizes.xs};

  &:focus {
    border: #e4e4e4 solid 1px;
    outline: none;
  }
`;
export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border-radius: 5px 0 0 5px;
  height: 100٪;
  padding-left: 4%;
  padding-right: 4%;

  .mobile-icon p {
    display: block;
  }
  &:hover {
    border: ${({ theme }) => theme.colors.grey[300]} solid 0.1px;
  }
`;
