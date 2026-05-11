/**
 * Atoms - Button
 */
"use client";

// UI
import Icon from "@/components/atoms/icon/icon";
import { ButtonType } from "./components/buttonType";
import { StyledButton } from "./components/buttonStyle";

const responsiveSizes = {
  sm: "lg",
  md: "lg",
  lg: "xl",
  xl: "xl",
  "2xl": "2xl",
};

const Button = ({
  block,
  paddingOverride,
  center,
  children,
  color = "black",
  className,
  dashed,
  disabled = false,
  endIcon,
  endIconProps,
  iconOnly,
  noHover,
  noPadding,
  onClick,
  outline = false,
  responsive = { ...responsiveSizes },
  rounded = true,
  shadow = false,
  size = "md",
  startIcon,
  startIconProps,
  style,
  textColor = "white",
  type = "button",
}: ButtonType) => {
  return (
    <StyledButton
      $paddingOverride={paddingOverride}
      $block={block}
      $center={center}
      $color={color}
      $dashed={dashed}
      $iconOnly={iconOnly}
      $noHover={noHover}
      $noPadding={noPadding}
      $outline={outline}
      $responsive={responsive}
      $rounded={rounded}
      $shadow={shadow}
      $size={size}
      className={className}
      $textColor={textColor}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type}
    >
      {startIcon && <Icon icon={startIcon} {...startIconProps} />}

      {children}

      {endIcon && <Icon icon={endIcon} {...endIconProps} />}
    </StyledButton>
  );
};

export default Button;
