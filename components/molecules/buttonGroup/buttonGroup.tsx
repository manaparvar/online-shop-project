/**
 * Mollecules - Button Group
 */

// UI
import styled from "styled-components";
import Button from "../../atoms/button/button";
type ButtonsType = {
  buttons: any;
  color: any;
  hasGap: any;
  onClick: any;
  size: any;
  textColor: any;
  iconOnly: boolean;
  responsive: any;
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
    <StyledButtonGroup hasGap={hasGap}>
      {buttons.map((item: any, index: number) => {
        return (
          <Button
            key={index}
            {...item}
            responsive={responsive}
            color={color}
            iconOnly={iconOnly}
            onClick={(e: any) => onClick(e, index)}
            size={size}
            textColor={textColor}
          />
        );
      })}
    </StyledButtonGroup>
  );
};

const StyledButtonGroup = styled.div<{ hasGap: boolean }>`
  display: inline-flex;
  gap: ${({ hasGap }: any) => hasGap && "10px"};
`;

export default Buttons;
