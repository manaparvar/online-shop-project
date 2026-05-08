"use client";

import Image from "next/image";
import {
  AvatarWrapper,
  AuthButtons,
  SignupButton,
  LoginButton,
} from "./component/avatar.style";
import NavLink from "@/components/atoms/link/link";
import Button from "@/components/atoms/button/button";

type User = {
  name: string;
  image: string;
};

export default function Avatar({ user }: { user?: User }) {
  if (!user) {
    return (
      <AuthButtons>
        <LoginButton
          as="a"
          href="/login"
          outline
          size="sm"
          color="black"
          textColor="black"
        >
          Log in
        </LoginButton>

        <SignupButton
          as="a"
          href="/signup"
          outline
          size="sm"
          color="black"
          textColor="black"
        >
          Sign up
        </SignupButton>
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
