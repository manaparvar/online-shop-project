"use client";
import { useTheme } from "styled-components";
import { iconsMap } from "./component/iconData";
import { IconWrapper, StyledIcon, Label } from "./component/icon.style";
import { IconProps } from "./icon.type";
import { useDevice } from "@/components/hooks/useDevice";

export default function Icon({
  icon,
  href,
  label,
  className,
  isFilled,
  color,
  strokeWidth = 1.25,
}: IconProps) {
  const SelectedIcon = iconsMap[icon];
  const device = useDevice();
  const theme = useTheme();

  const resolvedColor = color
    ? theme.colors[color as keyof typeof theme.colors]
    : undefined;

  return (
    <IconWrapper $color={color}>
      <StyledIcon
        href={href}
        className={className}
        $color={resolvedColor}
        $isFilled={isFilled}
        as={SelectedIcon}
        strokeWidth={strokeWidth}
      />
      {label && device !== "mobile" && device !== "sm" && (
        <Label variant="caption" color="primary">
          {label}
        </Label>
      )}
    </IconWrapper>
  );
}
