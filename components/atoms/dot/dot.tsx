import TransientProps from "@/types/transientProps.type";

import styled from "styled-components";

export type DotProps = {
  active?: boolean;
};

type DotStyledProps = TransientProps<DotProps>;

const Dot = styled.div<DotStyledProps>`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s ease;
  background: ${({ $active, theme: { colors } }) => {
    const colorKey = "secondary-50";
    return $active ? colors.primary : colors[colorKey as keyof typeof colors];
  }};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 13px;
    height: 13px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 16px;
    height: 16px;
  }
`;
export default Dot;
