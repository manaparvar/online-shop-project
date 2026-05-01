import { Dot, DotsWrapper } from "./productCard.styles";

const Dots = ({ page, pages, scrollToPage }: any) => {
  return (
    <DotsWrapper>
      {Array.from({ length: pages }).map((_, i) => (
        <Dot key={i} $active={page === i} onClick={() => scrollToPage(i)} />
      ))}
    </DotsWrapper>
  );
};

export default Dots;
