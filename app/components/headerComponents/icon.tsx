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

  if (!SelectedIcon) {
    console.warn(`Icon "${icon}" not found!`);
    return null;
  }

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

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;
const StyledIcon = styled.svg`
  width: ${sizes.sm}px;

  @media (min-width: 376px) {
    width: 20px;
  }
  @media (min-width: 1024px) {
    width: ${sizes.lg}px;
  }
  stroke: ${({ theme }) => theme.colors.mediumGrey};
`;

const Label = styled(Text)`
  margin-top: 4px;
  &:hover {
    opacity: 0.7;
  }
`;
