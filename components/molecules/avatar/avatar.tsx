"use client";
import Image from "next/image";

import { AvatarWrapper } from "./component/avatar.style";

type User = {
  name: string;
  image: string;
};

export default function Avatar({ user }: { user?: User }) {
  if (!user) {
    return null;
  }
  const fallback = user.name?.charAt(0).toUpperCase() || "?";

  return (
    <AvatarWrapper>
      {user.image ? (
        <Image
          alt={user.name}
          fill
          src={user.image}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <AvatarWrapper>{fallback}</AvatarWrapper>
      )}
    </AvatarWrapper>
  );
}
