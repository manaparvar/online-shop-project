"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  AvatarWrapper,
  AuthButtons,
  SignupButton,
  LoginButton,
} from "./component/avatar.style";

type User = {
  name: string;
  image: string;
};

export default function Avatar({ user }: { user?: User }) {
  const router = useRouter();
  if (!user) {
    return (
      <AuthButtons>
        <LoginButton
          onClick={() => router.push("/login")}
          outline
          size="sm"
          color="black"
          textColor="black"
        >
          Log in
        </LoginButton>

        <SignupButton
          onClick={() => router.push("/signup")}
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
