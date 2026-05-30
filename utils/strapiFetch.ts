type StrapiFetchOptions = Omit<RequestInit, "body" | "method"> & {
  method?: string;
  params?: Record<string, string>;
  body?: unknown;
  next?: NextFetchRequestConfig;
};

async function strapiFetch<T = unknown>(
  path: string,
  options?: StrapiFetchOptions,
): Promise<T> {
  let baseUrl: string = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";
  // ;
  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  baseUrl = baseUrl.replace(/\/+$/, "");
  const normalisedPath = path.startsWith("/") ? path : `/${path}`;

  const {
    method = "GET",
    params,
    headers,
    body,
    next,
    ...rest
  } = options ?? {};

  const url = new URL(`${baseUrl}${normalisedPath}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );
  }

  const fetchOptions: RequestInit & { next?: NextFetchRequestConfig } = {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  };

  if (next) {
    fetchOptions.next = next;
  }

  const response = await fetch(url.toString(), fetchOptions);

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Strapi API error: ${response.status} ${response.statusText} — ${body.slice(0, 200)}`,
    );
  }

  const json = await response.json();
  return json as T;
}

export default strapiFetch;
