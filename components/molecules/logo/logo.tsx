"use client";
import { LogoWrapper, TextWrapper, LogoImage } from "./component/logo.style";
import { Text } from "../../atoms/text/text";

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoImage
        src="/MainLogo.png"
        alt="Website Logo"
        width={32}
        height={32}
      />
      <TextWrapper>
        <Text variant="button">Shopping</Text>
        <Text variant="button" color="pink">
          &nbsp;Website
        </Text>
      </TextWrapper>
    </LogoWrapper>
  );
}
