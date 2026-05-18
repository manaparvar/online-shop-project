import { RectangleHorizontal } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Login Layout
      {children}
    </>
  );
}
