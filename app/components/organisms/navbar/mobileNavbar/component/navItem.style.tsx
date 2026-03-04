import styled from "styled-components";
import { Text } from "@/app/components/Atoms/text/text";
import Icon from "@/app/components/molecules/icon/icon";

export const ItemWrapper = styled.li`
  gap: 16px;
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    justify-content: left;
  }
`;
export const SubMenu = styled.ul`
  @media (min-width: 1024px) {
    position: absolute;
  }
`;
export const TagText = styled(Text)<{ $isPink: boolean }>`
  color: ${({ $isPink, theme }) =>
    $isPink ? theme.colors.pink : theme.colors.black};
`;
export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.black};
`;
