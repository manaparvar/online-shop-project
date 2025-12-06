"use client";

import { FC } from "react";
import styled from "styled-components";
import { Text } from "./../Atoms/text/text";
import { iconData, iconsNames, IconItem } from "./iconData";
import { sizes, SizeKey } from "../../../styles/sizes";
import { theme } from "@/styles/theme";

type IconProps = {
  size: SizeKey;
  item: IconItem;
  color: keyof typeof theme.colors;
  className: string;
};

export default function Icon({ item, className, color, size }: IconProps) {
  const { icon, label, fontVariant } = item;
  const SelectedIcon = iconsNames[icon];

  return (
    <IconWrapper className={className}>
      <SelectedIcon size={sizes[size]} color={color} />
      <Label variant={fontVariant}>{label}</Label>
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
