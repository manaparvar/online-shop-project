import { IconName } from "./component/iconData";
import TransientProps from "@/types/transientProps.type";
import ColorKey from "@/types/colorKey.type";
export type IconProps = {
  color?: ColorKey;
  icon: IconName;
  isFilled?: boolean;
  label?: string;
  strokeWidth?: number;
  href?: string;
  className?: string;
};

export type StyledIconProps = TransientProps<
  Omit<IconProps, "icon" | "label" | "color">
> & {
  $color?: string;
};
