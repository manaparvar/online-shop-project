/**
 * Mollecules - Button Group
 */

// UI
import { MouseEvent } from "react";
import styled from "styled-components";
import Button from "../../atoms/button/button";
import type { IconName } from "../../atoms/icon/component/iconData";

type ButtonGroupItem = {
  "aria-label"?: string;
  disabled?: boolean;
  startIcon?: IconName;
};

type ButtonsType = {
  buttons: ButtonGroupItem[];
  color: string;
  hasGap: boolean;
  onClick: (e: MouseEvent, index: number) => void;
  size: string;
  textColor: string;
  iconOnly: boolean;
  responsive: Record<string, string>;
};
const Buttons = ({
  buttons = [],
  color,
  onClick,
  size,
  textColor,
  hasGap,
  iconOnly,
  responsive,
}: ButtonsType) => {
  if (buttons.length < 1) {
    return null;
  }

  return (
    <StyledButtonGroup $hasGap={hasGap}>
      {buttons.map((item, index) => {
        return (
          <Button
            key={index}
            {...item}
            responsive={responsive}
            color={color}
            iconOnly={iconOnly}
            onClick={(e: MouseEvent) => onClick(e, index)}
            size={size}
            textColor={textColor}
          />
        );
      })}
    </StyledButtonGroup>
  );
};

const StyledButtonGroup = styled.div<{ $hasGap: boolean }>`
  display: inline-flex;
  gap: ${({ $hasGap }) => ($hasGap ? "10px" : "0")};
`;

export default Buttons;
