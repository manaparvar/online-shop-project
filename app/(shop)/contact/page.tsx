import Button from "@/components/atoms/button/button";
import Carousel from "@/components/organisms/carousel/carousel";
export default function Contact() {
  return (
    <>
      <Button startIcon="heart" iconOnly></Button>
      <br />
      <br />
      <Button startIcon="heart">My Button</Button>
      <br />
      <br />
      <Button startIcon="heart">your Button</Button>
      <br />
      <br />
      <Button startIcon="heart" outline textColor="black">
        your Button
      </Button>
      <br />
      asdsd
      <Carousel />
    </>
  );
}
