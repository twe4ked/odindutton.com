// 1. Import utilities from `astro:content`

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
};
