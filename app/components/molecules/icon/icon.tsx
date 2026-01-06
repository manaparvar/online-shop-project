"use client";

import { FC } from "react";
import { theme } from "@/styles/theme";
import { textVariants } from "../../Atoms/text/variants";
import { IconName, iconsMap } from "./component/iconData";
import { IconWrapper, StyledIcon, Label } from "./component/icon.style";

type TextVariant = keyof typeof textVariants;

type IconProps = {
  icon: IconName;
  color: keyof typeof theme.colors;
  className?: string;
  fontVariant?: TextVariant;
  label?: string;
};

export default function Icon({
  className,
  color,
  fontVariant,
  icon,
  label,
}: IconProps) {
  const SelectedIcon = iconsMap[icon];

  // if (!SelectedIcon) {
  //   console.warn(`Icon "${icon}" not found!`);
  //   return null;
  // }

  return (
    <IconWrapper className={className}>
      <StyledIcon
        as={SelectedIcon}
        color={theme.colors[color]}
        strokeWidth={1.25}
      />
      {label && (
        <Label variant={fontVariant} color="black">
          {label}
        </Label>
      )}
    </IconWrapper>
  );
}
