import styled from "styled-components";
import Icon from "@/components/atoms/icon/icon";

export const AvatarWrapper = styled.div`
  height: ${({ theme }) => theme.sizes.md};
  width: ${({ theme }) => theme.sizes.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.sizes.lg};
    width: ${({ theme }) => theme.sizes.lg};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes.xlg};
    width: ${({ theme }) => theme.sizes.xlg};
  }

  align-self: flex-start;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
export const AuthButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.xs};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.sizes.sm};
  }
`;

export const LoginIcon = styled(Icon)`
  display: inline-flex;
`;

export const SignupIcon = styled(Icon)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline-flex;
  }
`;
