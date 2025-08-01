// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://odindutton.com",
  redirects: {
    "/say": "/say-complete",
    "/itunes": "/rediscover-your-music",
    "/anybar": "/anybar-internet-status",
    "/rust": "/my-rust-journey",

    "/no-js": "/no-script",
  },
});
