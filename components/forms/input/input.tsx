import styled from "styled-components";
import { SizeKey } from "@/styles/sizes";
import { textVariants } from "@/styles/variants";

type StyledProps = {
  $size?: SizeKey;
  $textAlign?: "left" | "center" | "right";
  $variant: keyof typeof textVariants;
};

type InputProps = {
  accept?: string;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  max?: number;
  mentions?: any;
  min?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  regExp?: string;
  type: "email" | "number" | "password" | "search" | "text" | "hidden" | "file";
  validate?: any;
  value?: any;
  variant?: keyof typeof textVariants;
};

export default function Input({
  accept,
  autoComplete = "off",
  className,
  defaultValue,
  disabled = false,
  max,
  min,
  name,
  placeholder,
  readOnly = false,
  type = "text",
  value,
  variant = "caption",
}: InputProps) {
  return (
    <MyInput
      accept={accept}
      aria-label={name}
      autoComplete={autoComplete}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      key={name}
      max={max}
      min={min}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
      value={value}
      $variant={variant}
    />
  );
}

export const MyInput = styled.input<StyledProps>`
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-size: ${({ $variant = "caption" }) =>
    textVariants[$variant].fontSize.mobile};
  outline: none;
  &:focus {
    border: 0.8px solid ${({ theme }) => theme.colors.secondary};
  }
`;
