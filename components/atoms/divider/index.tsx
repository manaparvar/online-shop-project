import styled from "styled-components";
import { LineVariants } from "./variants";
import { useDevice } from "../../hooks/useDevice";

import ColorKey from "@/types/colorKey.type";

type LineProps = {
  width?: string;
  height?: string;
  color?: ColorKey;
  dash?: boolean;
  lineType: keyof typeof LineVariants.mobile;
};

type StyledLineProps = {
  $width?: string;
  $height?: string;
  $color?: ColorKey;
  $dash?: boolean;
};

export default function DividerLine({
  lineType,
  color,
  dash = false,
}: LineProps) {
  const device = useDevice();
  const style = LineVariants[device][lineType];

  return (
    <Line
      $width={style.width}
      $height={style.height}
      $color={color}
      $dash={dash}
    />
  );
}

export const Line = styled.div<StyledLineProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-bottom: ${({ $dash, $color, theme }) =>
    $dash ? `1px dashed ${$color ? theme.colors[$color] : "#000"}` : "none"};
`;
