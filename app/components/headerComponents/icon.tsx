"use client";

import { FC } from "react";
import styled from "styled-components";
import { iconsNames } from "./icons";
import { iconSize } from "./icons";
import { theme } from "./../../../styles/theme";
import { Text } from "./../Atoms/text/text";
import { textVariants } from "../Atoms/text/variants";

type iconProps = {
  label: string;
  icon: keyof typeof iconsNames;
  size?: keyof typeof iconSize;
  color?: keyof typeof theme.colors;
  className?: string;
  fontVariant?: keyof typeof textVariants.mobile;
};

export default function Icon({
  icon,
  label,
  size = "sm",
  color = "black",
  className,
  fontVariant,
}: iconProps) {
  const SelectedIcon = iconsNames[icon];
  const variant = fontVariant ?? "body";
  return (
    <IconWrapper>
      <SelectedIcon size={iconSize[size]} color={color} className={className} />
      <Label variant={variant} color={color}>
        {label}
      </Label>
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
