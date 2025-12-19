"use client";

import styled from "styled-components";
import Image from "next/image";
import { sizes, SizeKey } from "@/styles/sizes";

export default function Profile() {
  return (
    <ProfileWrapper>
      <Image
        src="/profile.jpg"
        alt="User Profile"
        fill
        style={{ objectFit: "contain" }}
      />
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div<{ size?: SizeKey }>`
  width: ${({ size }) => (size ? sizes.lg : sizes.lg)};
  height: ${({ size }) => (size ? sizes.lg : sizes.lg)};
  @media (min-width: 376px) {
    width: ${({ size }) => (size ? sizes.xlg : sizes.lg)};
    height: ${({ size }) => (size ? sizes.xlg : sizes.lg)};
  }
  @media (min-width: 1024px) {
    width: ${({ size }) => (size ? sizes.xl : sizes.lg)};
    height: ${({ size }) => (size ? sizes.xl : sizes.lg)};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`;
