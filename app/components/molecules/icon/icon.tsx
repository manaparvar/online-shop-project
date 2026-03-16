"use client";

import { textVariants } from "../../../../styles/variants";
import { IconName, iconsMap } from "./component/iconData";
import { IconWrapper, StyledIcon, Label } from "./component/icon.style";

type TextVariant = keyof typeof textVariants;

type IconProps = {
  icon: IconName;
  className?: string;
  fontVariant?: TextVariant;
  label?: string;
};

export default function Icon({ fontVariant, icon, label }: IconProps) {
  const SelectedIcon = iconsMap[icon];

  return (
    <IconWrapper>
      <StyledIcon as={SelectedIcon} strokeWidth={1.25} />
      {label && (
        <Label variant="caption" color="black">
          {label}
        </Label>
      )}
    </IconWrapper>
  );
}
