import { RefObject, useCallback, useEffect, useState } from "react";

type UseScrollCarouselParams<T extends HTMLElement> = {
  containerRef: RefObject<T | null>;
};

export default function useScrollCarousel<T extends HTMLElement>({
  containerRef,
}: UseScrollCarouselParams<T>) {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const visibleWidth = el.clientWidth;
    const totalWidth = el.scrollWidth;
    const scrollLeft = el.scrollLeft;
    const maxScrollLeft = Math.max(0, totalWidth - visibleWidth);

    const nextPages = Math.max(1, Math.ceil(maxScrollLeft / visibleWidth) + 1);

    let nextPage = Math.round(scrollLeft / visibleWidth);

    if (scrollLeft >= maxScrollLeft - 1) {
      nextPage = nextPages - 1;
    }

    setPages(nextPages);
    setPage(nextPage);
    setCanGoPrev(scrollLeft > 0);
    setCanGoNext(scrollLeft < maxScrollLeft - 1);
  }, [containerRef]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    update();

    el.addEventListener("scroll", update, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      update();
    });

    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [containerRef, update]);

  const scrollToPage = useCallback(
    (targetPage: number) => {
      const el = containerRef.current;
      if (!el) return;

      const visibleWidth = el.clientWidth;
      const maxScrollLeft = Math.max(0, el.scrollWidth - visibleWidth);
      const safePage = Math.max(0, Math.min(targetPage, pages - 1));

      const targetLeft =
        safePage === pages - 1 ? maxScrollLeft : safePage * visibleWidth;

      el.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    },
    [containerRef, pages],
  );

  const next = useCallback(() => {
    if (!canGoNext) return;
    scrollToPage(page + 1);
  }, [canGoNext, page, scrollToPage]);

  const prev = useCallback(() => {
    if (!canGoPrev) return;
    scrollToPage(page - 1);
  }, [canGoPrev, page, scrollToPage]);

  return {
    page,
    pages,
    update,
    next,
    prev,
    scrollToPage,
    canGoPrev,
    canGoNext,
  };
}
