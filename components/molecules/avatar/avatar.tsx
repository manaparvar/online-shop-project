"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  AvatarWrapper,
  AuthButtons,
  LoginIcon,
  SignupIcon,
} from "./component/avatar.style";
import Icon from "@/components/atoms/icon/icon";
import { useDevice } from "@/components/hooks/useDevice";

type User = {
  name: string;
  image: string;
};

export default function Avatar({ user }: { user?: User }) {
  const router = useRouter();
  if (!user) {
    return (
      <AuthButtons>
        <LoginIcon
          href="/login"
          color="secondary"
          icon="logIn"
          strokeWidth={1.5}
          label="Login"
        />

        <SignupIcon
          href="/signup"
          color="secondary"
          icon="userPlus"
          strokeWidth={1.5}
          label="signup"
        />
      </AuthButtons>
    );
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
