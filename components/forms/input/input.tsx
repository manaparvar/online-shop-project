import { forwardRef } from "react";
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
  max?: number | string;
  mentions?: string[];
  min?: number | string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  regExp?: string;
  type: "email" | "number" | "password" | "search" | "text" | "hidden" | "file";
  validate?: (value: string) => boolean | string;
  value?: string | number;
  variant?: keyof typeof textVariants;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      accept,
      autoComplete = "off",
      className,
      defaultValue,
      disabled = false,
      max,
      min,
      name,
      onBlur,
      onChange,
      placeholder,
      readOnly = false,
      type = "text",
      value,
      variant = "caption",
    },
    ref,
  ) => {
    return (
      <MyInput
        ref={ref}
        accept={accept}
        aria-label={name}
        autoComplete={autoComplete}
        className={className}
        defaultValue={defaultValue}
        disabled={disabled}
        max={max}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={value}
        $variant={variant}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;

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
