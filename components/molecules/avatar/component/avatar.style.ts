import styled, { css } from "styled-components";
import Button from "@/components/atoms/button/button";

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    width: ${({ theme }) => theme.sizes.md};
    height: ${({ theme }) => theme.sizes.md};
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: ${({ theme }) => theme.sizes.lg};
      height: ${({ theme }) => theme.sizes.lg};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: ${({ theme }) => theme.sizes.xlg};
      height: ${({ theme }) => theme.sizes.xlg};
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
    gap: ${({ theme }) => theme.sizes.xs};
  `}
`;
export const LoginButton = styled(Button)`
  display: inline-flex;
`;
export const SignupButton = styled(Button)`
  display: none;
  ${({ theme }) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: inline-flex;
    }
  `}
`;
