"use client";

import styled from "styled-components";
import Image from "next/image";
import { iconSize } from "../headerComponents/icons";

type props = {
  size: keyof typeof iconSize;
};

export default function Profile({ size = "md" }: props) {
  const imageSize = iconSize[size];
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
`;
