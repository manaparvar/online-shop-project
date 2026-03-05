"use client";
import { LogoWrapper, TextWrapper, LogoImage } from "./component/logo.style";
import { Text } from "../../Atoms/text/text";
import { sizes } from "@/styles/sizes";

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoImage
        src="/MainLogo.png"
        alt="Website Logo"
        width={sizes["lg"]}
        height={sizes["lg"]}
      />
      <TextWrapper>
        <Text variant="button">Shopping</Text>
        <Text variant="button" color="pink">
          Website
        </Text>
      </TextWrapper>
    </LogoWrapper>
  );
}
