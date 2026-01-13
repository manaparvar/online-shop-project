import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import { textVariants } from "@/styles/variants";
type fontKey = keyof typeof textVariants;

export const SearchWrapper = styled.div`
  height: ${sizes.md}px;
  width: 100%;
  /* width: clamp(264px, 84vw, 312px); */
  @media (min-width: 376px) {
    height: ${sizes.lg}px;
    width: 80%;
    position: absolute;
    /* width: clamp(312px, 80vw, 856px); */
  }
  @media (min-width: 1024px) {
    height: ${sizes.xlg}px;
    width: 304px;
    position: static;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SearchInput = styled.input<{ fontSize?: fontKey }>`
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (min-width: 376px) {
    height: 32px;
    width: 80%;
  }
  @media (min-width: 1024px) {
    height: 40px;
    width: 80%;
  }
  &::placeholder {
    font-size: ${({ fontSize }) =>
      fontSize ?? textVariants.caption.fontSize.mobile};
    @media (min-width: 376px) {
      font-size: ${({ fontSize }) =>
        fontSize ?? textVariants.caption.fontSize.tablet};
    }
    @media (min-width: 1024px) {
      font-size: ${({ fontSize }) =>
        fontSize ?? textVariants.caption.fontSize.desktop};
    }
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
  background-color: ${({ theme }) => theme.colors.brightGrey};
  border-radius: 0 5px 5px 0;
  border: none;
  padding-left: 8px;
  flex: 1;

  &:focus {
    border: #e4e4e4 solid 1px;
    outline: none;
  }
`;
export const SearchButton = styled.button`
  height: 100٪;
  flex: 0 0 40px;

  background-color: ${({ theme }) => theme.colors.midBrightGrey};
  border-radius: 5px 0 0 5px;
  padding-left: 4%;
  padding-right: 4%;
  border: #d5d5d5 solid 0.1px;

  .mobile-icon p {
    display: block;
  }
  &:hover {
    box-shadow: 0 0 3px #b7b7b7;
    border: #d5d5d5 solid 0.1px;
  }
`;
