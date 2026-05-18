const strapiFetch = async (
  path: string,
  { method = "GET", params = {}, headers, token, body, next, ...rest }: any,
) => {
  const baseUrl: string = process.env.STRAPI_API_URL || "";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const response = await fetch(`${baseUrl}${path}`, {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",

      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });
  return response;
};

export default strapiFetch;
