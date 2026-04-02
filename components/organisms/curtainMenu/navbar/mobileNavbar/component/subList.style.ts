import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Text } from "@/components/atoms/text/text";

export const SublistWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.grey[50]};
  border-radius: 3px;
  gap: ${sizes.xs};
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${sizes.sm};
    background-color: ${({ theme }) => theme.colors.white};
    width: ${sizes["5xl"]};
    box-shadow: 1px 3px 8px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 5px 5px;
  }
`;
export const LinkFrame = styled.li`
  padding: 5px;

  @media (min-width: ${theme.breakpoints.desktop}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      border-radius: 4px;
    }
  }
  ${Text} {
    margin-left: 8px;
  }
`;
