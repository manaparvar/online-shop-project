import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

function parseStrapiUrl() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}

const strapiUrl = parseStrapiUrl();

const remotePattern: RemotePattern = {
  protocol: (strapiUrl?.protocol?.replace(":", "") as "http" | "https") || "http",
  hostname: strapiUrl?.hostname || "localhost",
  pathname: "/uploads/**",
};

if (strapiUrl?.port) {
  remotePattern.port = strapiUrl.port;
}

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [remotePattern],
  },
};

export default nextConfig;
