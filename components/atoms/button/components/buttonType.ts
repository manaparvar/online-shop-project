/**
 * Atoms - Button - components - Button Type
 */

// Utils

import { IconName } from "../../icon/component/iconData";
import { IconProps } from "../../icon/icon.type";
import TransientProps from "@/types/transientProps.type";
import { ThemeType } from "../../../../styles/theme";

export type BUTTON_TYPE_VALUES = "button" | "submit" | "reset";

type IconPropsType = Omit<IconProps, "icon">;

export interface ButtonType {
  block?: boolean;
  center?: boolean;
  children?: any;
  className?: string;
  color?: string;
  dashed?: boolean;
  disabled?: boolean;
  endIcon?: IconName;
  endIconProps?: IconPropsType;
  form?: string | any;
  iconOnly?: boolean;
  isActive?: boolean;
  noPadding?: boolean;
  noHover?: boolean;
  onClick?: any;
  outline?: boolean;
  rounded?: boolean;
  responsive?: any;
  shadow?: boolean;
  startIcon?: IconName;
  startIconProps?: IconPropsType;
  size?: any;
  style?: any;
  textColor?: string;
  type?: BUTTON_TYPE_VALUES;
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
