/**
 * Atoms - Button
 */
"use client";

// UI
import Icon from "@/components/atoms/icon/icon";
import { ButtonType } from "./components/buttonType";
import { StyledButton } from "./components/buttonStyle";

const Button = ({
  block,
  center,
  children,
  color = "black",
  dashed,
  disabled = false,
  endIcon,
  endIconProps,
  iconOnly,
  noHover,
  noPadding,
  onClick,
  outline = false,
  responsive,
  rounded = true,
  shadow = false,
  size = "md",
  startIcon,
  startIconProps,
  style,
  textColor = "white",
  type = "button",
}: ButtonType) => {
  const responsiveSizes = {
    sm: "lg",
    md: "lg",
    lg: "xl",
    xl: "xl",
    "2xl": "2xl",
  };

  return (
    <StyledButton
      $block={block}
      $center={center}
      $color={color}
      $dashed={dashed}
      $iconOnly={iconOnly}
      $noHover={noHover}
      $noPadding={noPadding}
      $outline={outline}
      $responsive={{ ...responsiveSizes, ...responsive }}
      $rounded={rounded}
      $shadow={shadow}
      $size={size}
      $textColor={textColor}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type}
    >
      {startIcon && (
        <Icon
          icon={startIcon}
          {...{
            ...startIconProps,
          }}
        />
      )}

      {children}

      {endIcon && (
        <Icon
          icon={endIcon}
          {...{
            ...endIconProps,
          }}
        />
      )}
    </StyledButton>
  );
};

export default Button;
