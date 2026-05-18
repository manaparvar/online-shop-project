export type StrapiCollectionResponse<T> = {
  data: T[];
  meta?: unknown;
};

export type StrapiSingleResponse<T> = {
  data: T | null;
  meta?: unknown;
};
