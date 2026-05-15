import { Dot, DotsWrapper } from "./cardCarousel.styles";

type DotsProps = {
  page: number;
  pages: number;
  scrollToPage: (index: number) => void;
};
const Dots = ({ page, pages, scrollToPage }: DotsProps) => {
  return (
    <DotsWrapper>
      {Array.from({ length: pages }).map((_, i) => (
        <Dot key={i} $active={page === i} onClick={() => scrollToPage(i)} />
      ))}
    </DotsWrapper>
  );
};

export default Dots;
