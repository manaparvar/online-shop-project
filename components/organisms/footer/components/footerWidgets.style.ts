import styled from "styled-components";
import Form from "@/components/forms/form/form";
import Input from "@/components/forms/input/input";
import { textVariants } from "@/styles/variants";

export const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.sizes.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: unset;
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
  min-width: 100px;
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
`;

export const NewsletterFormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledInput = styled(Input)`
  flex: 1;
  height: 24px;
  min-width: 0;
  max-width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding-left: ${({ theme }) => theme.sizes.xs};

  &::placeholder {
    text-align: center;
    font-size: ${textVariants.caption.fontSize.mobile};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 32px;
    max-width: 100%;

    &::placeholder {
      font-size: ${textVariants.caption.fontSize.tablet};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 40px;
  }
`;
