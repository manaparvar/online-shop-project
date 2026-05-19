/**
 * Atoms - Button - components - Button Type
 */

// Utils

import { CSSProperties, MouseEvent, ReactNode } from "react";
import { IconName } from "../../icon/component/iconData";
import { IconProps } from "../../icon/icon.type";
import TransientProps from "@/types/transientProps.type";
import { ThemeType } from "../../../../styles/theme";
import ColorKey from "@/types/colorKey.type";

export type BUTTON_TYPE_VALUES = "button" | "submit" | "reset";

type IconPropsType = Omit<IconProps, "icon">;

export interface ButtonType {
  block?: boolean;
  center?: boolean;
  children?: ReactNode;
  className?: string;
  color?: ColorKey | string;
  dashed?: boolean;
  disabled?: boolean;
  endIcon?: IconName;
  endIconProps?: IconPropsType;
  form?: string;
  iconOnly?: boolean;
  isActive?: boolean;
  noPadding?: boolean;
  noHover?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  rounded?: boolean;
  responsive?: Record<string, string>;
  shadow?: boolean;
  startIcon?: IconName;
  startIconProps?: IconPropsType;
  size?: string;
  style?: CSSProperties;
  textColor?: ColorKey | string;
  type?: BUTTON_TYPE_VALUES;
  paddingOverride?: string;
}

export type ButtonStyledProps = TransientProps<
  Omit<
    ButtonType,
    "onClick" | "children" | "className" | "style" | "disabled" | "type"
  >
>;

export type ButtonColorTypes = Pick<
  ButtonProps,
  "$color" | "$outline" | "$textColor" | "theme"
>;

export type ButtonProps = ButtonStyledProps & {
  theme: ThemeType;
};

export type ThemeBackgroundProps = {
  color: string;
  outline?: boolean;
  theme: ThemeType;
};
