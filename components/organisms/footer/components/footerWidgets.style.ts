import styled from "styled-components";
import Input from "@/components/forms/input/input";
import { textVariants } from "@/styles/variants";

export const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    display: grid;
    column-gap: ${({ theme }) => theme.sizes.md};
    justify-content: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs};
  align-self: flex-start;
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.xs};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs};
  align-self: self-end;
`;
export const StyledInput = styled(Input)`
  width: ${({ theme }) => theme.sizes["3xl"]};
  height: ${({ theme }) => theme.sizes.sm};
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme }) => theme.colors.background};
  &::placeholder {
    text-align: center;
    font-size: ${textVariants.caption.fontSize.mobile};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.sizes.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes.lg};
    width: ${({ theme }) => theme.sizes["4xl"]};
    &::placeholder {
      text-align: center;
      font-size: ${textVariants.caption.fontSize.tablet};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::placeholder {
      text-align: center;
      font-size: ${textVariants.caption.fontSize.desktop};
    }
  }
`;
