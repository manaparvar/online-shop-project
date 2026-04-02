"use client";

import Image from "next/image";
import { AvatarWrapper } from "./component/avatar.style";

interface AvatarType {
  alt: string;
  src: string;
}

export default function Avatar({ alt, src }: AvatarType) {
  return (
    <AvatarWrapper>
      <Image alt={alt} fill src={src} style={{ objectFit: "cover" }} />
    </AvatarWrapper>
  );
}
