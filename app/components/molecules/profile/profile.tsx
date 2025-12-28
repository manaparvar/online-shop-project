"use client";

import Image from "next/image";
import { ProfileWrapper } from "./component/profile.style";

export default function Profile() {
  return (
    <ProfileWrapper>
      <Image
        src="/profile.jpg"
        alt="User Profile"
        fill
        style={{ objectFit: "cover" }}
      />
    </ProfileWrapper>
  );
}
