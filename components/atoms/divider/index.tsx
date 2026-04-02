import styled from "styled-components";
import { LineVariants } from "./variants";
import { theme } from "@/styles/theme";
import { useDevice } from "../../hooks/useDevice";
type ColorKey = keyof typeof theme.colors;
type lineProps = {
  width?: string;
  height?: string;
  color?: ColorKey;
  lineType: keyof typeof LineVariants.mobile;
};
export default function DividerLine({ lineType, color }: lineProps) {
  const device = useDevice();
  const style = LineVariants[device][lineType];

  return <Line width={style.width} height={style.height} color={color} />;
}

export const Line = styled.div<{
  width: string;
  height: string;
  color?: ColorKey;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) =>
    color ? theme.colors[color] : theme.colors.grey[100]};
`;
