import Header from "@/components/organisms/header/header";
import Footer from "@/components/organisms/footer/footer";
import Container from "@/components/atoms/grid/container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
