import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SublistWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px 0 8px 8px;
  gap: ${sizes.xs};
  background-color: ${({ theme }) => theme.colors.grey[50]};
  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: ${sizes.sm};
    padding: 16px 0 16px 16px;
    width: ${sizes["5xl"]};
    box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 5px 5px;
  }
`;
