import styled, { css } from "styled-components";
import Button from "@/components/atoms/button/button";

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.md};
    height: ${theme.sizes.md};
    @media (min-width: ${theme.breakpoints.sm}) {
      width: ${theme.sizes.lg};
      height: ${theme.sizes.lg};
    }
    @media (min-width: ${theme.breakpoints.md}) {
      width: ${theme.sizes.xlg};
      height: ${theme.sizes.xlg};
    }
    align-self: flex-start;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  `}
`;
export const AuthButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.sizes.xs};
  `}
`;
export const LoginButton = styled(Button)`
  display: inline-flex;
`;
export const SignupButton = styled(Button)`
  display: none;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.lg}) {
      display: inline-flex;
    }
  `}
`;
