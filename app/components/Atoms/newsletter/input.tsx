import styled from "styled-components";
import { textVariants } from "@/styles/variants";

type Props = {
  textSize?: keyof typeof textVariants;
};

export default function Input({ textSize }: Props) {
  return <MyInput textSize={textSize} />;
}

export const MyInput = styled.input<Props>``;
