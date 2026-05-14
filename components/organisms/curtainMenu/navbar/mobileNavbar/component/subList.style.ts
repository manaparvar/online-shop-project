import styled from "styled-components";
import shadeLinearRgb from "@/utils/shadeLinearRgb";

export const SublistWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  gap: ${({ theme }) => theme.sizes.xs};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.background};
    width: 192px;
    box-shadow: 1px 3px 8px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 5px 5px;
  }
`;
export const LinkFrame = styled.li`
  padding: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:hover {
      background-color: ${({ theme }) =>
        shadeLinearRgb({ p: 0.9, color: theme.colors.secondary })};

      border-radius: 4px;
    }
  }
  .text {
    margin-left: 8px;
  }
`;
