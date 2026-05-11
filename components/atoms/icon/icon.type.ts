import { IconName } from "./component/iconData";
import TransientProps from "@/types/transientProps.type";
import { theme } from "@/styles/theme";
export type IconProps = {
  color?: keyof typeof theme.colors;
  icon: IconName;
  isFilled?: boolean;
  label?: string;
  strokeWidth?: number;
};

export type StyledIconProps = TransientProps<Omit<IconProps, "icon" | "label">>;
