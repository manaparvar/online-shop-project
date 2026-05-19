type StrapiFetchOptions = Omit<RequestInit, "body" | "method"> & {
  method?: string;
  params?: Record<string, string>;
  body?: unknown;
  token?: string;
  next?: NextFetchRequestConfig;
};

async function strapiFetch<T = unknown>(
  path: string,
  options?: StrapiFetchOptions,
): Promise<T> {
  const baseUrl: string = process.env.STRAPI_API_URL || "";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const { method = "GET", params, headers, token, body, next, ...rest } =
    options ?? {};

  const url = new URL(`${baseUrl}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );
  }

  const fetchOptions: RequestInit & { next?: NextFetchRequestConfig } = {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  };

  if (next) {
    fetchOptions.next = next;
  }

  const response = await fetch(url.toString(), fetchOptions);
  const json = await response.json();
  return json as T;
}

export default strapiFetch;
