"use client";

import { ReactNode } from "react";
import {
  useForm,
  UseFormProps,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import styled from "styled-components";

export type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: (methods: UseFormReturn<FieldValues>) => ReactNode;
  className?: string;
  disableEnter?: boolean;
  resetAfterSubmit?: boolean;
} & UseFormProps<FieldValues>;

export default function Form({
  onSubmit,
  children,
  className,
  disableEnter = false,
  resetAfterSubmit = false,
  ...useFormOptions
}: FormProps) {
  const methods = useForm(useFormOptions);
  const { handleSubmit, reset } = methods;

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    if (resetAfterSubmit) {
      reset();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && disableEnter) {
      e.preventDefault();
    }
  };

  return (
    <StyledForm
      className={className}
      onSubmit={handleSubmit(handleFormSubmit)}
      onKeyDown={handleKeyDown}
    >
      {children(methods)}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
`;
