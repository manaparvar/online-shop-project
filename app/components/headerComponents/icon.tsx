"use client";

import { FC } from "react";
import styled from "styled-components";
import { Text } from "./../Atoms/text/text";
import { iconsNames, IconItem } from "./iconData";
import { sizes, SizeKey } from "../../../styles/sizes";
import { theme } from "@/styles/theme";
import { TextVariant } from "../Atoms/text/variants";

type IconProps = {
  size: SizeKey;
  item: IconItem;
  color: keyof typeof theme.colors;
  className: string;
  fontVariant?: TextVariant;
};

export default function Icon({
  item,
  className,
  color,
  size,
  fontVariant,
}: IconProps) {
  const { icon, label } = item;
  const SelectedIcon = iconsNames[icon];

  return (
    <IconWrapper className={className}>
      <SelectedIcon size={sizes[size]} color={color} />
      <Label variant={fontVariant} color="black">
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
