import { sizes } from "@/styles/sizes";
import styled from "styled-components";

export const SublistWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px 0 8px 8px;
  gap: ${sizes.xs}px;
  background-color: ${({ theme }) => theme.colors.grey[50]};
  @media (min-width: 1024px) {
    gap: ${sizes.sm}px;
    padding: 16px 0 16px 16px;
    width: ${sizes["5xl"]}px;
    box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
  }
`;
