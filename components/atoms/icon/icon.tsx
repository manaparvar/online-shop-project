"use client";
import { iconsMap } from "./component/iconData";
import { IconWrapper, StyledIcon, Label } from "./component/icon.style";
import { IconProps } from "./icon.type";

export default function Icon({
  icon,
  label,
  isFilled,
  color,
  strokeWidth = 1.25,
}: IconProps) {
  const SelectedIcon = iconsMap[icon];

  return (
    <IconWrapper $color={color}>
      <StyledIcon
        $color={color}
        $isFilled={isFilled}
        as={SelectedIcon}
        strokeWidth={strokeWidth}
      />
      {label && (
        <Label variant="caption" color="black">
          {label}
        </Label>
      )}
    </IconWrapper>
  );
}
