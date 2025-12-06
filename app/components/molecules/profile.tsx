"use client";

import styled from "styled-components";
import Image from "next/image";
import { sizes, SizeKey } from "@/styles/sizes";

type props = {
  size: SizeKey;
};

export default function Profile({ size }: props) {
  const imageSize = sizes[size];
  return (
    <ProfileWrapper>
      <Image
        src="/profile.jpg"
        alt="User Profile"
        width={imageSize}
        height={imageSize}
      />
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: grey;
  margin-bottom: 5px;
`;
