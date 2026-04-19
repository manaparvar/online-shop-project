import { RefObject, useCallback, useEffect, useState } from "react";

type UseScrollCarouselParams<T extends HTMLElement> = {
  containerRef: RefObject<T | null>;
};

export default function useScrollCarousel<T extends HTMLElement>({
  containerRef,
}: UseScrollCarouselParams<T>) {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const visibleWidth = el.clientWidth;
    const totalWidth = el.scrollWidth;
    const scrollLeft = el.scrollLeft;

    const nextPages = Math.max(1, Math.ceil(totalWidth / visibleWidth));
    const nextPage = Math.round(scrollLeft / visibleWidth);

    setPages(nextPages);
    setPage(nextPage);
  }, [containerRef]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    update();

    const handleScroll = () => {
      const currentPage = Math.round(el.scrollLeft / el.clientWidth);
      setPage(currentPage);
    };

    const resizeObserver = new ResizeObserver(() => {
      update();
    });

    el.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [containerRef, update]);

  const scrollToPage = useCallback(
    (targetPage: number) => {
      const el = containerRef.current;
      if (!el) return;

      const safePage = Math.max(0, Math.min(targetPage, pages - 1));

      el.scrollTo({
        left: safePage * el.clientWidth,
        behavior: "smooth",
      });
    },
    [containerRef, pages],
  );

  const next = useCallback(() => {
    scrollToPage(page + 1);
  }, [page, scrollToPage]);

  const prev = useCallback(() => {
    scrollToPage(page - 1);
  }, [page, scrollToPage]);

  return {
    page,
    pages,
    update,
    next,
    prev,
    scrollToPage,
    canGoPrev: page > 0,
    canGoNext: page < pages - 1,
  };
}
