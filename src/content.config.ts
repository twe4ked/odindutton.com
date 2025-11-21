import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
});

const photos = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      slug: z.string().optional(),
      photos: z.array(
        z.object({
          src: image(),
          title: z.string().optional(),
        }),
      ),
    }),
  loader: glob({ pattern: "**/*.toml", base: "./src/photos" }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  photos,
};
