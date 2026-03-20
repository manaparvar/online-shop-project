import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import Input from "@/components/atoms/input/input";
import { theme } from "@/styles/theme";
import { footerData } from "../footerData";
import { textVariants } from "@/styles/variants";

export const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  @media (min-width: 700px) {
    flex-direction: column;
    display: grid;
    column-gap: ${sizes.md};
    justify-content: flex-end;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
  align-self: flex-start;
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${sizes.xs};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs};
  align-self: self-end;
`;
export const StyledInput = styled(Input)`
  width: ${sizes["3xl"]};
  height: ${sizes.sm};
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    text-align: center;
    font-size: ${textVariants.caption.fontSize.mobile};
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    height: ${sizes.md};
  }
  @media (min-width: 700px) {
    height: ${sizes.lg};
    width: ${sizes["4xl"]};
    &::placeholder {
      text-align: center;
      font-size: ${textVariants.caption.fontSize.tablet};
    }
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    &::placeholder {
      text-align: center;
      font-size: ${textVariants.caption.fontSize.desktop};
    }
  }
`;
