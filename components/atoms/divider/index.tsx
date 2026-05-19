import styled from "styled-components";
import { LineVariants } from "./variants";
import { useDevice } from "../../hooks/useDevice";
import ColorKey from "@/types/colorKey.type";

type LineType = keyof typeof LineVariants.mobile;

type LineProps = {
  width?: string;
  height?: string;
  color?: ColorKey | string;
  dash?: boolean;
  lineType: LineType;
  className?: string;
};

type StyledLineProps = {
  $width?: string;
  $height?: string;
  $color?: ColorKey | string;
  $dash?: boolean;
};

export default function DividerLine({
  lineType,
  color,
  dash = false,
  className,
}: LineProps) {
  const device = useDevice();
  const style = LineVariants[device][lineType];

  return (
    <Line
      $width={style.width}
      $height={style.height}
      $color={color}
      $dash={dash}
      className={className}
    />
  );
}

export const Line = styled.div<StyledLineProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-bottom: ${({ $dash, $color, theme }) =>
    `1px ${$dash ? "dashed" : "solid"} ${$color ? theme.colors[$color as keyof typeof theme.colors] : "#000"}`};
`;
