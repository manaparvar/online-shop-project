import styled from "styled-components";
import { sizes } from "@/styles/sizes";
import { theme } from "@/styles/theme";
import { textVariants } from "@/styles/variants";
import Button from "@/components/atoms/button/button";
import Input from "../../input/input";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${sizes.md};
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: ${sizes.lg};
    width: 80%;
    max-width: 400px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${sizes.xlg};
    width: 304px;
  }
`;

export const SearchInput = styled(Input)`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  border: none;
  border-radius: 0 5px 5px 0;
  padding-left: ${sizes.xs};

  &::placeholder {
    font-size: ${textVariants.caption.fontSize.mobile};
    color: ${({ theme }) => theme.colors.secondary};

    @media (min-width: ${theme.breakpoints.sm}) {
      font-size: ${textVariants.caption.fontSize.tablet};
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: ${textVariants.caption.fontSize.desktop};
    }
  }

  &:focus {
    border: ${({ theme }) => theme.colors.background} solid 1px;
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 5px 0 0 5px;
`;
