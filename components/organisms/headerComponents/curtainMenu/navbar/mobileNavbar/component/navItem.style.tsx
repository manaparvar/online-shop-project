import styled, { css } from "styled-components";
import { Text } from "@/components/atoms/text/text";
import { theme } from "@/styles/theme";

export const ItemWrapper = styled.li`
  gap: 16px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${theme.breakpoints.desktop}) {
    justify-content: left;
  }
`;

export const SubMenu = styled.ul`
  @media (min-width: ${theme.breakpoints.desktop}) {
    position: absolute;
  }
`;
export const TagText = styled(Text)<{ $isAttention: boolean }>`
  color: ${({ $isAttention, theme }) =>
    $isAttention ? theme.colors.pink : theme.colors.black};
`;
