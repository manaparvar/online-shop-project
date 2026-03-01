import styled from "styled-components";

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
export const SubMenu = styled.ul``;
