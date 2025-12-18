"use client";

import { FC } from "react";
import styled from "styled-components";
import { Text } from "./../Atoms/text/text";
// import { iconsNames, IconItem } from "./iconData";
import { sizes, SizeKey } from "../../../styles/sizes";
import { theme } from "@/styles/theme";
import { textVariants } from "../Atoms/text/variants";
import { IconName, iconsMap } from "./iconData";

type TextVariant = keyof typeof textVariants;

type IconProps = {
  icon: IconName;
  size: SizeKey;
  color: keyof typeof theme.colors;
  className?: string;
  fontVariant?: TextVariant;
  label?: string;
};

export default function Icon({
  className,
  color,
  size,
  fontVariant,
  icon,
  label,
}: IconProps) {
  const SelectedIcon = iconsMap[icon];

  if (!SelectedIcon) {
    console.warn(`Icon "${icon}" not found!`);
    return null;
  }

  return (
    <IconWrapper className={className}>
      <SelectedIcon size={sizes[size]} color={theme.colors[color]} />
      {label && (
        <Label variant={fontVariant} color="black">
          {label}
        </Label>
      )}
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const Label = styled(Text)`
  margin-top: 8px;
  &:hover {
    opacity: 0.7;
  }
`;
// const className = {
//   align-items: "center",
//   display: "flex",
//   flex-direction: "column",
//   justify-content: center,
//   margin-left: "24px"
//   &:hover {
//     opacity: 0.75;
//   }
// };
